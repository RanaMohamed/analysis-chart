import { SchoolRecord } from "@appTypes/schoolTypes";
import { selectedCampSelector } from "@redux/camps/campsSelectors";
import { selectedCountrySelector } from "@redux/countries/countriesSelectors";
import { createSelector } from "@reduxjs/toolkit";
import groupBy from "@utils/groupBy";
import months from "@constants/months";

import { RootState } from "..";

export const schoolsLoadedSelector = (state: RootState) => state.schools.loaded;
export const schoolsRecordsSelector = (state: RootState) =>
  state.schools.records || [];
export const selectedSchoolValSelector = (state: RootState) =>
  state.schools.selectedSchool;

export const selectedSchoolSelector = createSelector(
  selectedCountrySelector,
  selectedCampSelector,
  selectedSchoolValSelector,
  (selectedCountry, selectedCamp, selectedSchool) => {
    return selectedSchool || (selectedCountry && selectedCamp && "ALL");
  }
);

export const schoolsSelector = createSelector(
  schoolsRecordsSelector,
  selectedCampSelector,
  selectedCountrySelector,
  (schoolsRecords, selectedCamp, selectedCountry) => {
    const schools = Object.keys(
      schoolsRecords.reduce((acc, el: SchoolRecord) => {
        if (el.camp === selectedCamp && el.country === selectedCountry)
          return { ...acc, [el.school]: true };

        return { ...acc };
      }, {})
    );

    return schools;
  }
);

export const selectedSchoolsRecordsSelector = createSelector(
  schoolsRecordsSelector,
  selectedCampSelector,
  selectedCountrySelector,
  selectedSchoolSelector,
  (schoolsRecords, selectedCamp, selectedCountry, selectedSchool) => {
    const schools: SchoolRecord[] = schoolsRecords.filter(
      (el: SchoolRecord) => {
        return (
          el.camp === selectedCamp &&
          el.country === selectedCountry &&
          (selectedSchool === "ALL" || el.school === selectedSchool)
        );
      }
    );

    return schools;
  }
);

export const chartDataSelector = createSelector(
  selectedSchoolsRecordsSelector,
  (selectedSchools) => {
    const groupedSchools = groupBy(selectedSchools, "school");

    const res: { [key: string]: number[] } = Object.entries(
      Object.fromEntries(groupedSchools)
    ).reduce((acc, [schoolName, schoolRecords]) => {
      const schoolRecordsPerMonth = groupBy(schoolRecords, "month");
      const data = months.map((month) => {
        const monthRecords = schoolRecordsPerMonth.get(month) || [];
        const noLessons = monthRecords.reduce(
          (acc: number, el: SchoolRecord) => acc + el.lessons,
          0
        );
        return monthRecords.length ? noLessons : null;
      });
      return { ...acc, [schoolName]: data };
    }, {});
    return res;
  }
);

export const legendDetailsSelector = createSelector(
  chartDataSelector,
  selectedCampSelector,
  (selectedSchools, selectedCamp) => {
    let total = 0;
    Object.values(selectedSchools).forEach((school) => {
      school.forEach((month) => {
        total += month || 0;
      });
    });
    return {
      total: total,
      selectedCamp: selectedCamp || "",
    };
  }
);

const detailsOptionsSelector = (state: RootState) =>
  state.schools.detailsOptions;

export const schoolDetailsSelector = createSelector(
  selectedSchoolsRecordsSelector,
  detailsOptionsSelector,
  (selectedRecords, detailsOptions) => {
    const filteredRecords = selectedRecords.filter(
      (record) =>
        record.school === detailsOptions.selectedSchool &&
        record.month === detailsOptions.selectedMonth
    );

    return filteredRecords;
  }
);

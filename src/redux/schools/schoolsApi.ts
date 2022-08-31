import { SchoolRecord } from "@appTypes/schoolTypes";

export async function getData() {
  return fetch("./data.json")
    .then((res) => res.json())
    .then((data: SchoolRecord[]) => {
      const countries = Object.keys(
        data.reduce(
          (acc: object, el: SchoolRecord) => ({ ...acc, [el.country]: true }),
          {}
        )
      );
      const camps = Object.keys(
        data.reduce(
          (acc: object, el: SchoolRecord) => ({ ...acc, [el.camp]: true }),
          {}
        )
      );

      return {
        countries,
        camps,
        records: data,
      };
    });
}

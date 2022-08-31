import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import Main from "@pages/main/Main";
import { setCamps } from "@redux/camps/campsActions";
import { setCountries } from "@redux/countries/countriesActions";
import { setSchoolsRecords } from "@redux/schools/schoolsActions";
import { getData } from "@redux/schools/schoolsApi";
import { schoolsLoadedSelector } from "@redux/schools/schoolsSelectors";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "@pages/details/Details";
import Loading from "@components/common/Loading/Loading";

import { ConfigProvider } from "antd";
import Header from "@components/Header/Header";
import { useLocalization } from "./handlers/useLocalization";

function App() {
  const dispatch = useDispatch();
  const isLoaded = useSelector(schoolsLoadedSelector);

  const { dir } = useLocalization();

  useEffect(() => {
    const getAppData = async () => {
      const { countries, camps, records } = await getData();
      dispatch(setSchoolsRecords(records));
      dispatch(setCountries(countries));
      dispatch(setCamps(camps));
    };

    if (!isLoaded) {
      setTimeout(getAppData, 2000);
    }
  }, []);

  return (
    <ConfigProvider direction={dir}>
      <div className="app" dir={dir}>
        {!isLoaded ? (
          <Loading />
        ) : (
          <div>
            <Header />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/details" element={<Details />} />
              </Routes>
            </BrowserRouter>
          </div>
        )}
      </div>
    </ConfigProvider>
  );
}

export default App;

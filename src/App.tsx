import React from "react";
import s from "./styles/App.module.css"
import { Header, Sidebar, PageHolder, Footer } from "components";

export const App = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <Sidebar />
      <PageHolder />
      <Footer />
    </div>
  );
};

import { Route, Routes } from "react-router-dom";
import { routes } from "../services/routes";
import { Home } from "../pages/Home";
import { Currencies } from "../pages/Currencies";
import { News } from "../pages/News";
import { CurrenciesInfo } from "../pages/CurrenciesInfo";

export const PageHolder = () => {
  return (
    <div style={{gridArea: "content"}}>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.currencies} element={<Currencies />} />
        <Route path={routes.news} element={<News />} />
        <Route path={routes.currenciesInfo} element={<CurrenciesInfo />} />
      </Routes>
    </div>
  );
};

import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../../ui";
import { MarvelPage, DcPage, SearchPage, HeroesPage } from "../../heroes";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="heroe/:horoeId" element={<HeroesPage />} />

        <Route path="/" element={<Navigate to="/marvel" />} />

      </Routes>
    </>
  );
};

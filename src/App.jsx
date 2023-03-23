import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from './components/Navbar';

import { Home } from "./components/pages/Home";
import { Tasks } from "./components/pages/Tasks";
import { Archives } from "./components/pages/Archives";
import { Settings } from "./components/pages/Settings";

const settings = {
  now: new Date('2023-03-10'),
  filterTime: 15,
  themeName: 'light',
  themeLightBody: 'bg-gray-100',
  themeLightBg: 'bg-white',
  themeLightBorder: 'border-gray-200',
  themeLightNav: 'bg-gray-100',
  themeLightText: 'text-gray-800',
  themeLightInverseText: 'text-gray-100',
  themeLightPrimaryBg: 'bg-green-600',
  themeLightPrimaryBorder: 'border-green-600',
  themeLightPrimaryText: 'text-green-600',
  themeLightShadow: { boxShadow: '0px 0px 6px 0 rgba(0,0,0,0.25)' },
  themeDarkBody: 'bg-gray-900',
  themeDarkBg: 'bg-gray-800',
  themeDarkBorder: 'border-gray-700',
  themeDarkNav: 'bg-gray-800',
  themeDarkText: 'text-gray-100',
  themeDarkInverseText: 'text-gray-900',
  themeDarkPrimaryBg: 'bg-blue-500',
  themeDarkPrimaryBorder: 'border-blue-500',
  themeDarkPrimaryText: 'text-blue-500',
  themeDarkShadow: { boxShadow: '0px 0px 6px 0 rgba(0,0,0,0.5)' },
};
export const SettingsContext = createContext();

const classes = {
  body: settings.themeName === 'light' ? settings.themeLightBody : settings.themeDarkBody,
  bg: settings.themeName === 'light' ? settings.themeLightBg : settings.themeDarkBg,
  border: settings.themeName === 'light' ? settings.themeLightBorder : settings.themeDarkBorder,
  nav: settings.themeName === 'light' ? settings.themeLightNav : settings.themeDarkNav,
  text: settings.themeName === 'light' ? settings.themeLightText : settings.themeDarkText,
  inverseText: settings.themeName === 'light' ? settings.themeLightInverseText : settings.themeDarkInverseText,
  primaryBg: settings.themeName === 'light' ? settings.themeLightPrimaryBg : settings.themeDarkPrimaryBg,
  primaryText: settings.themeName === 'light' ? settings.themeLightPrimaryText : settings.themeDarkPrimaryText,
  primaryBorder: settings.themeName === 'light' ? settings.themeLightPrimaryBorder : settings.themeDarkPrimaryBorder,
  shadow: settings.themeName === 'light' ? settings.themeLightShadow : settings.themeDarkShadow,
};
export const ClassesContext = createContext();

export const App = () => {
  
  return (
    <>
      <SettingsContext.Provider value={[settings, classes]}>
      <BrowserRouter>
      <div className={`${classes.body} ${classes.text}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="archives" element={<Archives />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </BrowserRouter>
      </SettingsContext.Provider>
    </>
  );

};

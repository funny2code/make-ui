const express = require("express");
const router = express.Router();
const make = require("../contents/make");
const modelThemes = require("../models/themes");
// const modelSections = require('../models/sections');
const path = require("path");
const fs = require("fs").promises;
const fonts = require("../contents/fonts");

/* GET Theme Settings and Sections. */
router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const page_handle = req.query.page;

  if (!id || !page_handle) return next();

  try {
    const theme = await modelThemes.findById(id).exec();
    if (!theme) return next();

    const settingsFile = await fs.readFile(
      path.join(__dirname, `../themes/${id}/config/settings_data.json`),
      "utf-8"
    );
    if (!settingsFile) return next();
    const settings = JSON.parse(settingsFile);
    console.log("settings:", settings);
    const getPage = theme?.pages?.filter((page) => page.handle === page_handle);
    if (!getPage?.length) return next();
    const sectionsFile = await fs.readFile(
      path.join(__dirname, `../themes/${id}/${getPage[0]?.template_name}.json`),
      "utf-8"
    );
    if (!sectionsFile) return next();
    const parseSections = JSON.parse(sectionsFile);

    res.render("random", {
      user: req?.session?.user || null,
      isAdmin: req?.session?.user?.isAdmin || null,
      make: make,
      id: id,
      page_handle: page_handle,
      fonts: fonts,
      settingsSchema: theme?.settings_schema || null,
      settings: settings?.current || null,
      sectionsSchema: theme?.sections_schema || null,
      sections: parseSections,
      pages: theme?.pages || null,
    });
  } catch (err) {
    return next(err);
  }
});

/* POST Theme Settings and Sections. */
router.post("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { settings_data, templates } = req.body;
  const page_handle = req.query.page;

  if (!id || !page_handle) return next();

  try {
    const theme = await modelThemes.findById(id).exec();
    if (!theme) return next();

    const settingsFile = await fs.readFile(
      path.join(__dirname, `../themes/${id}/config/settings_data.json`),
      "utf-8"
    );
    if (!settingsFile) return next();
    const settings = JSON.parse(settingsFile);

    if (
      settings_data?.current &&
      Object.keys(settings_data?.current).length > 1
    ) {
      Object.entries(settings_data?.current).forEach(([key, val]) => {
        if (key && typeof val !== "object") {
          settings.current[key] = val;
        }
      });
    }

    if (
      settings_data?.current?.sections &&
      Object.keys(settings_data?.current?.sections).length > 0
    ) {
      Object.entries(settings_data?.current?.sections).forEach(([key, val]) => {
        settings.current.sections[key] = val;
      });
    }

    const getPage = theme?.pages?.filter((page) => page.handle === page_handle);
    if (!getPage?.length) return next();
    const sectionsFile = await fs.readFile(
      path.join(__dirname, `../themes/${id}/${getPage[0]?.template_name}.json`),
      "utf-8"
    );
    if (!sectionsFile) return next();
    const parseSections = JSON.parse(sectionsFile);

    if (
      Object.keys(templates).length > 0 &&
      templates[page_handle] &&
      templates[page_handle].sections &&
      Object.keys(templates[page_handle].sections).length > 0
    ) {
      Object.entries(templates[page_handle].sections).forEach(([key, val]) => {
        parseSections.sections[key] = val;
      });
    }

    res.render("random", {
      user: req?.session?.user || null,
      isAdmin: req?.session?.user?.isAdmin || null,
      make: make,
      id: id,
      page_handle: page_handle,
      fonts: fonts,
      settingsSchema: theme?.settings_schema || null,
      settings: settings?.current || null,
      sectionsSchema: theme?.sections_schema || null,
      sections: parseSections,
      pages: theme?.pages || null,
    });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;

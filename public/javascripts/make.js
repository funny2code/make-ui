(function () {
  const fonts = [
    {
      heading: "Sora",
      body: "Inter",
    },
    {
      heading: "Syne",
      body: "Roboto",
    },
    {
      heading: "Ultra",
      body: "PT Serif",
    },
    {
      heading: "IBM Plex Sans Condensed",
      body: "IBM Plex Sans",
    },
    {
      heading: "Work Sans",
      body: "Merriweather",
    },
    {
      heading: "Oswald",
      body: "Source Sans Pro",
    },
    {
      heading: "Barlow Condensed",
      body: "Montserrat",
    },
    {
      heading: "Alegreya",
      body: "Alegreya",
    },
    {
      heading: "Karla",
      body: "Merriweather",
    },
    {
      heading: "Roboto Condensed",
      body: "Roboto",
    },
    {
      heading: "Nunito Sans",
      body: "Nunito Sans",
    },
    {
      heading: "Libre Baskerville",
      body: "Libre Baskerville",
    },
    {
      heading: "Oswald",
      body: "Source Serif Pro",
    },
    {
      heading: "Nunito",
      body: "PT Sans",
    },
    {
      heading: "Montserrat",
      body: "Hind",
    },
    {
      heading: "Stint Ultra Expanded",
      body: "Pontano Sans",
    },
    {
      heading: "Karla",
      body: "Inconsolata",
    },
    {
      heading: "Playfair Display",
      body: "Lato",
    },
    {
      heading: "Libre Baskerville",
      body: "Source Sans Pro",
    },
    {
      heading: "Cormorant Garamond",
      body: "Proza Libre",
    },
    {
      heading: "Quattrocento",
      body: "Lora",
    },
    {
      heading: "Quattrocento",
      body: "Quattrocento Sans",
    },
    {
      heading: "Playfair Display",
      body: "Source Sans Pro",
    },
    {
      heading: "Yeseva One",
      body: "Josefin Sans",
    },
    {
      heading: "Quicksand",
      body: "Quicksand",
    },
    {
      heading: "Abril Fatface",
      body: "Poppins",
    },
    {
      heading: "Fjalla One",
      body: "Cantarell",
    },
    {
      heading: "Syne",
      body: "Inter",
    },
    {
      heading: "Source Sans Pro",
      body: "Source Serif Pro",
    },
    {
      heading: "Arvo",
      body: "Lato",
    },
    {
      heading: "Roboto",
      body: "Nunito",
    },
    {
      heading: "Cinzel",
      body: "Fauna One",
    },
    {
      heading: "Playfair Display",
      body: "Alice",
    },
    {
      heading: "Cormorant",
      body: "Open Sans",
    },
    {
      heading: "Oswald",
      body: "Lora",
    },
    {
      heading: "Yellowtail",
      body: "Lato",
    },
    {
      heading: "Archivo",
      body: "Tenor Sans",
    },
    {
      heading: "Open Sans",
      body: "Average Sans",
    },
    {
      heading: "Rufina",
      body: "Average Sans",
    },
    {
      heading: "Rufina",
      body: "Oxygen",
    },
    {
      heading: "Rubik",
      body: "Roboto Mono",
    },
    {
      heading: "Poiret One",
      body: "Montserrat",
    },
    {
      heading: "Oswald",
      body: "Quicksand",
    },
    {
      heading: "Merriweather",
      body: "Merriweather",
    },
    {
      heading: "Montserrat",
      body: "Open Sans",
    },
    {
      heading: "Roboto Slab",
      body: "Roboto",
    },
    {
      heading: "Anton",
      body: "Roboto",
    },
    {
      heading: "Montserrat",
      body: "Montserrat",
    },
    {
      heading: "Sintony",
      body: "Poppins",
    },
    {
      heading: "Fjalla One",
      body: "Inter",
    },
    {
      heading: "Teko",
      body: "Ubuntu",
    },
    {
      heading: "Josefin Slab",
      body: "Josefin Sans",
    },
    {
      heading: "Outfit",
      body: "Outfit",
    },
    {
      heading: "Philosopher",
      body: "Mulish",
    },
    {
      heading: "Cormorant",
      body: "Proza Libre",
    },
    {
      heading: "Mulish",
      body: "Space Mono",
    },
    {
      heading: "Alfa Slab One",
      body: "Gentium Book Basic",
    },
    {
      heading: "Quattrocento",
      body: "Fanwood Text",
    },
    {
      heading: "Playfair Display",
      body: "Quattrocento",
    },
    {
      heading: "Old Standard TT",
      body: "Mulish",
    },
    {
      heading: "Alegreya",
      body: "Source Sans Pro",
    },
    {
      heading: "Archivo Black",
      body: "Archivo",
    },
    {
      heading: "Cardo",
      body: "Hind",
    },
    {
      heading: "Josefin Sans",
      body: "Open Sans",
    },
    {
      heading: "Josefin Sans",
      body: "Inter",
    },
    {
      heading: "Lora",
      body: "Merriweather",
    },
    {
      heading: "Cabin",
      body: "Cabin",
    },
    {
      heading: "Kreon",
      body: "Ubuntu",
    },
    {
      heading: "Nunito",
      body: "Nunito Sans",
    },
    {
      heading: "Merriweather",
      body: "Source Sans Pro",
    },
    {
      heading: "Lora",
      body: "DM Sans",
    },
    {
      heading: "Archivo Black",
      body: "Inter",
    },
    {
      heading: "Bitter",
      body: "Raleway",
    },
    {
      heading: "Montserrat",
      body: "Source Sans Pro",
    },
    {
      heading: "Libre Baskerville",
      body: "Raleway",
    },
    {
      heading: "Bubblegum Sans",
      body: "Open Sans",
    },
    {
      heading: "Poiret One",
      body: "Lato",
    },
    {
      heading: "Roboto",
      body: "Roboto",
    },
    {
      heading: "Roboto Mono",
      body: "Roboto",
    },
    {
      heading: "EB Garamond",
      body: "Montserrat",
    },
    {
      heading: "Oswald",
      body: "Roboto",
    },
    {
      heading: "Inter",
      body: "Inter",
    },
    {
      heading: "Forum",
      body: "Work Sans",
    },
    {
      heading: "Tenor Sans",
      body: "Archivo Narrow",
    },
    {
      heading: "Playfair Display",
      body: "Raleway",
    },
    {
      heading: "Poppins",
      body: "Lora",
    },
    {
      heading: "Montserrat",
      body: "Lato",
    },
    {
      heading: "Six Caps",
      body: "Inter",
    },
    {
      heading: "Orelega One",
      body: "Montserrat",
    },
    {
      heading: "Della Respira",
      body: "Open Sans",
    },
    {
      heading: "Rozha One",
      body: "Questrial",
    },
    {
      heading: "Noto Serif",
      body: "Noto Sans",
    },
    {
      heading: "Playfair Display",
      body: "DM Sans",
    },
    {
      heading: "DM Serif Display",
      body: "Red Hat Display",
    },
    {
      heading: "Oswald",
      body: "Merriweather",
    },
    {
      heading: "Epilogue (Bold)",
      body: "Epilogue (Regular)",
    },
    {
      heading: "Expletus Sans",
      body: "Hind",
    },
  ];

  const imageBanner = [
    {
      image: "/6306f8e7db2cbec8c440f780/image-banner-img-1.webp",
      image_2: "/6306f8e7db2cbec8c440f780/image-banner-img-1.webp",
      show_override: false,
      ov_bg_color: "var(--py-color-black)",
      ov_bg_image: "",
      ov_opacity: "0.5",
      align: "center",
      m_align: "center",
      enable_anim: "",
      anim: "",
      blocks: {
        heading: {
          block_heading: "Classic Headphones",
          block_color: "var(--py-color-light)",
          block_weight: "",
          block_size: "60px",
          block_c_css: "",
          block_m_align: "",
          block_m_weight: "",
          block_m_size: "40px",
          block_m_c_css: "",
        },
        text: {
          block_text: "Simple, slim fit and super comfy headphones.",
          block_color: "var(--py-color-light)",
          block_weight: "",
          block_size: "22px",
          block_c_css: "",
          block_m_align: "",
          block_m_weight: "",
          block_m_size: "18px",
          block_m_c_css: "",
        },
        buttons: {
          block_button_label_1: "Shop All",
          block_view_btn_size: "large",
          block_view_btn_color: "dark",
        },
      },
    },
    {
      section_height: "600px",
      image: "/62fe8c9ba58276071f183cb8/image-banner-img-left-1.webp",
      image_desk_2: "/62fe8c9ba58276071f183cb8/image-banner-img-right-1.webp",
      image_2: "",
      show_override: false,
      ov_bg_color: "var(--py-color-black)",
      ov_bg_image: "",
      ov_opacity: "0.5",
      align: "center",
      m_align: "center",
      enable_anim: "",
      anim: "",
      blocks: {
        heading: {
          block_heading: "Industrial design meets fashion.",
          block_color: "var(--py-color-light)",
          block_weight: "",
          block_size: "60px",
          block_c_css: "",
          block_m_align: "",
          block_m_weight: "",
          block_m_size: "40px",
          block_m_c_css: "",
        },
        text: {
          block_text: "Atypical leather goods",
          block_color: "var(--py-color-light)",
          block_weight: "",
          block_size: "22px",
          block_c_css: "",
          block_m_align: "",
          block_m_weight: "",
          block_m_size: "18px",
          block_m_c_css: "",
        },
        buttons: {
          block_button_label_1: "Shop Now",
          block_view_btn_size: "large",
          block_view_btn_color: "dark",
        },
      },
    },
    {},
    {
      image: "/6306f8e7db2cbec8c440f780/image-banner-img-2.webp",
      image_2: "/6306f8e7db2cbec8c440f780/image-banner-img-2.webp",
      show_override: false,
      ov_bg_color: "var(--py-color-black)",
      ov_bg_image: "",
      ov_opacity: "0.5",
      align: "center",
      m_align: "center",
      enable_anim: "",
      anim: "",
      blocks: {
        heading: {
          block_heading: "Summer vibes.",
          block_color: "var(--py-color-light)",
          block_weight: "",
          block_size: "60px",
          block_c_css: "",
          block_m_align: "",
          block_m_weight: "",
          block_m_size: "40px",
          block_m_c_css: "",
        },
        text: {
          block_text: "",
          block_color: "var(--py-color-light)",
          block_weight: "",
          block_size: "22px",
          block_c_css: "",
          block_m_align: "",
          block_m_weight: "",
          block_m_size: "18px",
          block_m_c_css: "",
        },
        buttons: {
          block_button_label_1: "Shop Tops",
          block_view_btn_size: "large",
          block_view_btn_color: "dark",
        },
      },
    },
    {
      section_height: "700px",
      image: "/62fe8c9ba58276071f183cb8/image-banner-img-left-2.webp",
      image_desk_2: "/62fe8c9ba58276071f183cb8/image-banner-img-right-2.jpg",
      image_2: "",
      show_override: true,
      ov_bg_color: "var(--py-color-black)",
      ov_bg_image: "",
      ov_opacity: "0.5",
      align: "center",
      m_align: "center",
      enable_anim: "",
      anim: "",
      blocks: {
        heading: {
          block_heading: "Adventure-Inspired",
          block_color: "var(--py-color-light)",
          block_weight: "",
          block_size: "60px",
          block_c_css: "",
          block_m_align: "",
          block_m_weight: "",
          block_m_size: "40px",
          block_m_c_css: "",
        },
        text: {
          block_text: "Sustainable Outdoor Supplies",
          block_color: "var(--py-color-light)",
          block_weight: "",
          block_size: "22px",
          block_c_css: "",
          block_m_align: "",
          block_m_weight: "",
          block_m_size: "18px",
          block_m_c_css: "",
        },
        buttons: {
          block_button_label_1: "SHOP EVERYTHING",
          block_view_btn_size: "large",
          block_view_btn_color: "dark",
        },
      },
    },
    {},
  ];

  let fontsCount = 0;

  // GLOBAL VARIABLES
  var focuseValue = "";
  const theme = {
    settings_data: {
      current: {
        sections: {},
      },
    },
    templates: {},
  };
  var saveButton = null;
  var downloadButton = null;
  var loading = null;
  var themeName = "ThemeMake";

  // Colors names Objects
  const colorsNamesContrast = {
    py_header_bg_color_1: "py_header_link_color_1",
    py_header_bg_color_2: "py_header_link_color_2",
    py_search_bg_color: "py_search_color",
    py_search_hover_bg_color: "py_search_hover_color",
    settings_py_cart_bg_color: "settings_py_cart_color",
    settings_ck_btn_bg: "settings_ck_btn_color",
  };
  // Colors Contrast Fun
  const getContrastYIQ = async (hexcolor) => {
    if (!hexcolor) return;
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 186 ? "#000000" : "#ffffff";
  };

  // Save old settings values
  const saveSettingsValues = async () => {
    let dataSections = document.querySelectorAll(".py__settings-section-item");
    if (!dataSections.length) return;
    dataSections.forEach(async (sectionItem, index) => {
      let sectionClosest = sectionItem.closest(".py__closest");
      let blockSettings = sectionClosest
        ? sectionClosest.querySelectorAll(".py__settings-block-item")
        : null;
      let sectionHandle = sectionItem?.getAttribute("data-section-handle");
      let templateName = sectionItem?.getAttribute("data-template-name");
      let templateHandle = templateName?.split("/").pop();
      let sectionId = sectionItem?.getAttribute("data-section-id");

      if (sectionId && sectionHandle) {
        if (theme.templates[templateHandle]) {
          if (theme.templates[templateHandle].sections[sectionId]) {
            await saveSectionSettings(sectionItem, templateHandle, sectionId);
            if (blockSettings?.length) {
              blockSettings.forEach(async (block, index) => {
                let blockType = block.getAttribute("data-block-type");
                let blockId = block.getAttribute("data-block-id");
                if (!blockType && !blockId) return;
                if (
                  theme.templates[templateHandle].sections[sectionId].blocks[
                    blockId
                  ]
                ) {
                  await saveBlockSettings(
                    block,
                    templateHandle,
                    sectionId,
                    blockId
                  );
                } else {
                  theme.templates[templateHandle].sections[sectionId].blocks[
                    blockId
                  ] = {
                    type: blockType,
                    settings: {},
                  };
                  theme.templates[templateHandle].sections[
                    sectionId
                  ].block_order.push(blockId);
                  await saveBlockSettings(
                    block,
                    templateHandle,
                    sectionId,
                    blockId
                  );
                }
              });
            }
          } else {
            theme.templates[templateHandle].sections[sectionId] = {
              type: sectionHandle,
              settings: {},
            };
            theme.templates[templateHandle].order.push(sectionId);
            await saveSectionSettings(sectionItem, templateHandle, sectionId);
            if (blockSettings?.length) {
              theme.templates[templateHandle].sections[sectionId].blocks = {};
              theme.templates[templateHandle].sections[sectionId].block_order =
                [];
              blockSettings.forEach(async (block, index) => {
                let blockType = block.getAttribute("data-block-type");
                let blockId = block.getAttribute("data-block-id");
                if (!blockType && !blockId) return;
                theme.templates[templateHandle].sections[sectionId].blocks[
                  blockId
                ] = {
                  type: blockType,
                  settings: {},
                };
                theme.templates[templateHandle].sections[
                  sectionId
                ].block_order.push(blockId);
                await saveBlockSettings(
                  block,
                  templateHandle,
                  sectionId,
                  blockId
                );
              });
            }
          }
        } else {
          theme.templates[templateHandle] = {
            sections: {},
            order: [],
          };
          theme.templates[templateHandle].sections[sectionId] = {
            type: sectionHandle,
            settings: {},
          };
          theme.templates[templateHandle].order.push(sectionId);
          await saveSectionSettings(sectionItem, templateHandle, sectionId);
          if (blockSettings?.length) {
            theme.templates[templateHandle].sections[sectionId].blocks = {};
            theme.templates[templateHandle].sections[sectionId].block_order =
              [];
            blockSettings.forEach(async (block, index) => {
              let blockType = block.getAttribute("data-block-type");
              let blockId = block.getAttribute("data-block-id");
              if (!blockType && !blockId) return;
              theme.templates[templateHandle].sections[sectionId].blocks[
                blockId
              ] = {
                type: blockType,
                settings: {},
              };
              theme.templates[templateHandle].sections[
                sectionId
              ].block_order.push(blockId);
              await saveBlockSettings(
                block,
                templateHandle,
                sectionId,
                blockId
              );
            });
          }
        }
      } else {
        if (sectionHandle) {
          if (theme.settings_data.current.sections[sectionHandle]) {
            await saveSettingsDataSection(sectionItem, sectionHandle);
            blockSettings.forEach(async (block, index) => {
              let blockType = block.getAttribute("data-block-type");
              let blockId = block.getAttribute("data-block-id");
              if (!blockType && !blockId) return;
              if (
                theme.settings_data.current.sections[sectionHandle].blocks[
                  blockId
                ]
              ) {
                await saveSettingsDataBlock(block, sectionHandle, blockId);
              } else {
                theme.settings_data.current.sections[sectionHandle].blocks[
                  blockId
                ] = {
                  type: blockType,
                  settings: {},
                };
                theme.settings_data.current.sections[
                  sectionHandle
                ].block_order.push(blockId);
                await saveSettingsDataBlock(block, sectionHandle, blockId);
              }
            });
          } else {
            theme.settings_data.current.sections[sectionHandle] = {
              type: sectionHandle,
              settings: {},
            };
            await saveSettingsDataSection(sectionItem, sectionHandle);
            if (blockSettings?.length) {
              theme.settings_data.current.sections[sectionHandle].blocks = {};
              theme.settings_data.current.sections[sectionHandle].block_order =
                [];
              blockSettings.forEach(async (block, index) => {
                let blockType = block.getAttribute("data-block-type");
                let blockId = block.getAttribute("data-block-id");
                if (!blockType && !blockId) return;
                theme.settings_data.current.sections[sectionHandle].blocks[
                  blockId
                ] = {
                  type: blockType,
                  settings: {},
                };
                theme.settings_data.current.sections[
                  sectionHandle
                ].block_order.push(blockId);
                await saveSettingsDataBlock(block, sectionHandle, blockId);
              });
            }
          }
        } else {
          sectionItem?.querySelectorAll("[name]")?.forEach((element) => {
            let elementId = element.getAttribute("name");
            let elementType = element.getAttribute("type");
            let elementValue = element.value;
            let settingsELementId = elementId.replace("settings_", "");
            theme.settings_data.current[settingsELementId] =
              elementValue === "false" || elementValue === "true"
                ? elementValue === "true"
                  ? true
                  : false
                : elementType === "range"
                ? parseInt(elementValue)
                : elementValue;
          });
        }
      }
    });
  };

  const saveSettingsDataSection = async (sectionItem, sectionHandle) => {
    sectionItem?.querySelectorAll("[name]")?.forEach((element) => {
      let elementId = element.getAttribute("name");
      let elementType = element.getAttribute("type");
      let elementValue = element.value;
      if (elementId.includes("settings")) {
        let settingsELementId = elementId.replace("settings_", "");
        theme.settings_data.current[settingsELementId] =
          elementValue === "false" || elementValue === "true"
            ? elementValue === "true"
              ? true
              : false
            : elementType === "range"
            ? parseInt(elementValue)
            : elementValue;
      } else {
        theme.settings_data.current.sections[sectionHandle].settings[
          elementId
        ] =
          elementValue === "false" || elementValue === "true"
            ? elementValue === "true"
              ? true
              : false
            : elementType === "range"
            ? parseInt(elementValue)
            : elementValue;
      }
    });
    return true;
  };

  const saveSettingsDataBlock = async (block, sectionHandle, blockId) => {
    block?.querySelectorAll("[name]")?.forEach((element) => {
      let elementId = element.getAttribute("name");
      let elementType = element.getAttribute("type");
      let elementValue = element.value;
      if (elementId.includes("settings")) {
        let settingsELementId = elementId.replace("settings_", "");
        theme.settings_data.current[settingsELementId] =
          elementValue === "false" || elementValue === "true"
            ? elementValue === "true"
              ? true
              : false
            : elementType === "range"
            ? parseInt(elementValue)
            : elementValue;
      } else {
        let blockELementId = elementId.replace("block_", "");
        theme.settings_data.current.sections[sectionHandle].blocks[
          blockId
        ].settings[blockELementId] =
          elementValue === "false" || elementValue === "true"
            ? elementValue === "true"
              ? true
              : false
            : elementType === "range"
            ? parseInt(elementValue)
            : elementValue;
      }
    });
    return true;
  };

  const saveSectionSettings = async (
    sectionItem,
    templateHandle,
    sectionId
  ) => {
    sectionItem?.querySelectorAll("[name]")?.forEach((element) => {
      let elementId = element.getAttribute("name");
      let elementType = element.getAttribute("type");
      let elementValue = element.value;
      if (elementId.includes("settings")) {
        let settingsELementId = elementId.replace("settings_", "");
        theme.settings_data.current[settingsELementId] =
          elementValue === "false" || elementValue === "true"
            ? elementValue === "true"
              ? true
              : false
            : elementType === "range"
            ? parseInt(elementValue)
            : elementValue;
      } else {
        theme.templates[templateHandle].sections[sectionId].settings[
          elementId
        ] =
          elementValue === "false" || elementValue === "true"
            ? elementValue === "true"
              ? true
              : false
            : elementType === "range"
            ? parseInt(elementValue)
            : elementValue;
      }
    });
    return true;
  };

  const saveBlockSettings = async (
    block,
    templateHandle,
    sectionId,
    blockId
  ) => {
    block?.querySelectorAll("[name]")?.forEach((element) => {
      let elementId = element.getAttribute("name");
      let elementType = element.getAttribute("type");
      let elementValue = element.value;
      if (elementId.includes("settings")) {
        let settingsELementId = elementId.replace("settings_", "");
        theme.settings_data.current[settingsELementId] =
          elementValue === "false" || elementValue === "true"
            ? elementValue === "true"
              ? true
              : false
            : elementType === "range"
            ? parseInt(elementValue)
            : elementValue;
      } else {
        let blockELementId = elementId.replace("block_", "");
        theme.templates[templateHandle].sections[sectionId].blocks[
          blockId
        ].settings[blockELementId] =
          elementValue === "false" || elementValue === "true"
            ? elementValue === "true"
              ? true
              : false
            : elementType === "range"
            ? parseInt(elementValue)
            : elementValue;
      }
    });
    return true;
  };

  // FETCH CONFIG FUNCTION
  const fetchConfig = (method = "POST", type = "json") => {
    return {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Accept: `application/${type}`,
      },
    };
  };

  // ERROR FUNCTION
  const errorHandle = (el = ".py__error-wrapper", message) => {
    let errorWraper = document.querySelector(el);
    errorWraper.textContent = message;
    errorWraper?.classList.add("active");
    loading?.classList.remove("py__animate");
  };

  // Save Function
  const save = async () => {
    let form = document.querySelector("form.py__settings-form");
    let url = form.getAttribute("action");

    if (!form || !url) return;

    loading?.classList.add("py__animate");

    let res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(theme),
    });
    let data = await res.text();
    if (!data) return loading?.classList.remove("py__animate");
    let dataParse = JSON.parse(data);
    if (dataParse?.status === 200) {
      saveButton?.setAttribute("aria-disabled", "true");
      downloadButton?.setAttribute("aria-disabled", "false");
      await saveSettingsValues();
    }
    loading?.classList.remove("py__animate");
  };

  // SAVE FIGMA DATA
  let figmaContent = [];
  const saveFigma = async () => {
    let userID = document
      .querySelector(".py__save-figma-button")
      .getAttribute("data-user-id");
    let themeID = document
      .querySelector(".py__save-figma-button")
      .getAttribute("data-theme-id");
    if (!userID || !themeID) return;
    loading?.classList.add("py__animate", "py__notopacity");
    loading?.insertAdjacentHTML(
      "beforeend",
      '<span class="py__save-figma-message">Please wait few minuts...</span>'
    );

    let currentUrl = location?.pathname + location?.search;
    let brandhref = encodeURI(
      document.querySelector(".global-styles")?.getAttribute("href")
    );
    currentUrl !== brandhref
      ? await changeViewPage(false, brandhref, false)
      : null;
    currentUrl !== brandhref ? await timeout(4000) : null;
    await saveBrandForFigma();

    let selectPages = document.querySelector(".py__preview-pages-select");
    let selectPagesOptions = selectPages.querySelectorAll("option");
    for (let option of selectPagesOptions) {
      let href = option.getAttribute("data-href");
      await changeViewPage(false, href, false);
      await timeout(3000);
      await savePageResForFigma();
    }

    let url = "/figma/" + userID + "/" + themeID;
    let res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(figmaContent),
    });
    let data = await res.text();
    if (!data) return;
    loading?.classList.remove("py__animate", "py__notopacity");
    loading?.querySelector(".py__save-figma-message")?.remove();
  };

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const savePageResForFigma = async () => {
    let res = await saveDesktopForFigma();
    return res;
  };

  const saveDesktopForFigma = async () => {
    let iframe = document.querySelector(".py__view-iframe");
    let pageName = iframe.getAttribute("data-page-name");
    let iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;
    if (!iframeDocument) return;
    let data = await mapDOM(
      iframeDocument.getElementsByTagName("body")[0],
      false
    );
    if (data) data.name = pageName + " Desktop";
    figmaContent.push(data);
    let tablet = document.querySelector('.py__button-view[data-type="tablet"]');
    tablet.click();
    let res = await saveTabletForFigma();
    return res;
  };

  const saveBrandForFigma = async () => {
    let iframe = document.querySelector(".py__view-iframe");
    let iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;
    if (!iframeDocument) return;
    let brandHtml = iframeDocument.getElementsByTagName("body")[0];
    let data = await mapDOM(brandHtml, false);
    if (data) data.name = "Brand";
    figmaContent.push(data);
  };

  const saveTabletForFigma = async () => {
    let iframe = document.querySelector(".py__view-iframe");
    let pageName = iframe.getAttribute("data-page-name");
    let iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;
    if (!iframeDocument) return;
    let data = await mapDOM(
      iframeDocument.getElementsByTagName("body")[0],
      false
    );
    if (data) data.name = pageName + " Tablet";
    figmaContent.push(data);
    let mobile = document.querySelector('.py__button-view[data-type="mobile"]');
    mobile.click();
    let res = await saveMobileForFigma();
    return res;
  };

  const saveMobileForFigma = async () => {
    let iframe = document.querySelector(".py__view-iframe");
    let pageName = iframe.getAttribute("data-page-name");
    let iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;
    if (!iframeDocument) return;
    let data = await mapDOM(
      iframeDocument.getElementsByTagName("body")[0],
      false
    );
    if (data) data.name = pageName + " Mobile";
    figmaContent.push(data);
    let desktop = document.querySelector(
      '.py__button-view[data-type="desktop"]'
    );
    desktop.click();
    return true;
  };

  // FIGMA HTML TO JSON
  const mapDOM = async (element, json) => {
    let treeObject = {};

    if (typeof element === "string") {
      if (window.DOMParser) {
        parser = new DOMParser();
        docNode = parser.parseFromString(element, "text/xml");
      } else {
        docNode = new ActiveXObject("Microsoft.XMLDOM");
        docNode.async = false;
        docNode.loadXML(element);
      }
      element = docNode.firstChild;
    }

    const convertToAngle = async (matrix) => {
      let values = matrix.split("(")[1];
      values = values.split(")")[0];
      values = values.split(",");
      let sin = values[1];
      return Math.round(Math.asin(sin) * (180 / Math.PI));
    };

    const dumpCSSText = async (element) => {
      let s = {};
      let o = getComputedStyle(element);
      s.backgroundColor = o["backgroundColor"];
      s.color = o["color"];
      s.width = o["width"];
      s.height = o["height"];
      s.fontSize = o["fontSize"];
      s.fontFamily = o["fontFamily"];
      s.borderWidth = o["borderWidth"];
      s.borderColor = o["borderColor"];
      s.textTransform = o["textTransform"];
      s.transform =
        o["transform"] !== "none"
          ? await convertToAngle(o["transform"])
          : "none";
      s.borderStyle = o["borderStyle"];
      s.borderBottomLeftRadius = o["borderBottomLeftRadius"];
      s.borderBottomRightRadius = o["borderBottomRightRadius"];
      s.borderTopLeftRadius = o["borderTopLeftRadius"];
      s.borderTopRightRadius = o["borderTopRightRadius"];
      s.justifyContent = o["justifyContent"];
      s.alignItems = o["alignItems"];
      s.textAlign = o["textAlign"];
      s.textDecoration = o["textDecorationLine"];
      let rect = element.getBoundingClientRect();
      s.x = rect.left;
      s.y = rect.top;
      return s;
    };

    const checkElementHide = async (element) => {
      let css = getComputedStyle(element);
      let display = css.getPropertyValue("display");
      let visibility = css.getPropertyValue("visibility");
      return display === "none" || visibility === "hidden" ? true : false;
    };

    //Recursively loop through DOM elements and assign properties to object
    const treeHTML = async (element, object) => {
      if (
        element.nodeName === "STYLE" ||
        element.nodeName === "LINK" ||
        element.nodeName === "SCRIPT" ||
        element.nodeName === "NOSCRIPT"
      )
        return;
      if (
        (element && element.nodeType === 8) ||
        (await checkElementHide(element)) ||
        element?.classList?.contains("visually-hidden")
      )
        return;
      object["type"] = element.nodeName;
      object["css"] = await dumpCSSText(element);
      if (element.nodeName === "svg")
        return (object["content"] = element.outerHTML);
      let nodeList = element.childNodes;
      if (nodeList != null) {
        if (nodeList.length) {
          object["content"] = [];
          for (let i = 0; i < nodeList.length; i++) {
            if (nodeList[i].nodeType == 3) {
              if (nodeList[i].nodeValue.replace(/[\r\n]/gm, "").trim() !== "") {
                object["content"].push(nodeList[i].nodeValue.trim());
              }
            } else {
              object["content"].push({});
              await treeHTML(
                nodeList[i],
                object["content"][object["content"].length - 1]
              );
            }
          }
        }
      }
      if (element.attributes != null) {
        if (element.attributes.length) {
          object["attributes"] = {};
          for (var i = 0; i < element.attributes.length; i++) {
            element.attributes[i].nodeName === "src"
              ? (object["attributes"][element.attributes[i].nodeName] =
                  element.src)
              : (object["attributes"][element.attributes[i].nodeName] =
                  element.attributes[i].nodeValue);
          }
        }
      }
    };
    await treeHTML(element, treeObject);

    return json ? JSON.stringify(treeObject) : treeObject;
  };

  // Get Register Popup Function
  const getRegister = async (event) => {
    if (!event) return;
    event.preventDefault();
    loading?.classList.add("py__animate");

    let res = await fetch("/signup", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let data = await res.text();
    if (!data) return loading?.classList.remove("py__animate");
    let body = document.querySelector("body");
    body.insertAdjacentHTML("afterend", data);
    loading?.classList.remove("py__animate");
  };

  // Get Login Popup Function
  const getLogin = async (event) => {
    if (!event) return;
    event.preventDefault();
    loading?.classList.add("py__animate");

    let res = await fetch("/login", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let data = await res.text();
    if (!data) return loading?.classList.remove("py__animate");
    let body = document.querySelector("body");
    body.insertAdjacentHTML("afterend", data);
    loading?.classList.remove("py__animate");
  };

  // Get Add Theme Popup Function
  const getAddTheme = async (event) => {
    if (!event) return;
    event.preventDefault();
    let el = event.target;
    let url = el.getAttribute("href");
    if (!url) return;

    let res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let data = await res.text();
    if (!data) return;
    let body = document.querySelector("body");
    body.insertAdjacentHTML("afterend", data);
  };

  // SignUp Function
  const signup = async (event) => {
    if (!event) return;
    event.preventDefault();
    let form = event.target;
    let url = event.target.getAttribute("action");
    let themeId = document
      .querySelector(".py__signup-button")
      ?.getAttribute("data-id");
    let body = null;
    if (!url || !themeId) return;
    loading?.classList.add("py__animate");

    let formData = new FormData(form);
    let ObjectFormData = Object.fromEntries(formData.entries());
    body = JSON.stringify(ObjectFormData);

    // Signup Ajax POST
    let signupFun = await fetch(url, { ...fetchConfig(), body });
    let signupFunRes = await signupFun.text();
    let signupFunParse = JSON.parse(signupFunRes);

    // Signup Ajax Response
    if (
      signupFunParse.status !== "active" &&
      signupFunParse.status !== "requires_confirmation"
    )
      return errorHandle(".py__signup-error-wrap", signupFunParse.message);
    if (signupFunParse.status === "requires_confirmation") {
      let stripe = Stripe("pk_test_hnMkmoqkvZxUjOrnEkPIVd80");
      let stripeResponse = await stripe.confirmCardPayment(
        signupFunParse?.client_secret
      );
      if (stripeResponse?.error || !stripeResponse?.paymentIntent) return;
    }

    // Add Theme Ajax POST;
    let addThemeUrl = `/add/${signupFunParse.id}/${themeId}`;
    body = JSON.stringify({ themename: themeName });
    let addThemeFun = await fetch(addThemeUrl, { ...fetchConfig(), body });
    let addThemeResponse = await addThemeFun.text();
    let addThemeParse = JSON.parse(addThemeResponse);
    if (addThemeParse.status !== 200)
      return errorHandle(".py__signup-error-wrap", addThemeParse.message);

    // Save Theme Settings Ajax POST
    let saveUrl = `/save/users/${signupFunParse.id}/themes/${addThemeParse.theme_id}`;
    body = JSON.stringify(theme);
    let saveFun = await fetch(saveUrl, { ...fetchConfig(), body });
    let saveFunResponse = await saveFun.text();
    let saveFunParse = JSON.parse(saveFunResponse);
    if (saveFunParse.status !== 200)
      return errorHandle(".py__signup-error-wrap", saveFunParse.message);

    // DOWNLOAD Fun Ajax POST
    let downloadUrl = "/download";
    body = JSON.stringify({
      userId: signupFunParse.id,
      themeId: addThemeParse.theme_id,
    });
    let downloadFun = await fetch(downloadUrl, { ...fetchConfig(), body });
    let downloadFunResponse = await downloadFun.blob();
    if (!downloadFunResponse)
      return errorHandle(
        ".py__signup-error-wrap",
        "Error! please try again few minutes late."
      );

    let downloadObjectUrl = window.URL.createObjectURL(downloadFunResponse);
    let createElement = document.createElement("a");
    createElement.style.display = "none";
    createElement.href = downloadObjectUrl;
    createElement.download = themeName + ".zip";
    document.body.appendChild(createElement);
    createElement.click();
    window.URL.revokeObjectURL(downloadObjectUrl);
    createElement.remove();
    loading?.classList.remove("py__animate");
    return (location.href = `/users/${signupFunParse.id}/themes/${addThemeParse.theme_id}?page=index&settings=global-styles`);
  };

  // Login Function
  const login = async (event) => {
    if (!event) return;
    event.preventDefault();
    let form = event.target;
    let url = event.target.getAttribute("action");
    if (!url) return;
    let formData = new FormData(form);
    let ObjectFormData = Object.fromEntries(formData.entries());
    loading?.classList.add("py__animate");

    let res = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ObjectFormData),
    });
    let data = await res.text();
    if (!data) return;
    let parseData = JSON.parse(data);
    if (parseData.status !== 200)
      return errorHandle(".py__login-error-wrap", parseData.message);
    loading?.classList.remove("py__animate");
    return (location.href = location.origin);
  };

  // ADD Theme Function
  const addTheme = async (event) => {
    if (!event) return;
    event.preventDefault();
    let form = event.target;
    let url = event.target.getAttribute("action");
    if (!url) return;
    let formData = new FormData(form);
    let ObjectFormData = Object.fromEntries(formData.entries());
    loading?.classList.add("py__animate");

    let res = await fetch(url, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ObjectFormData),
    });
    let data = await res.text();
    if (!data) return;
    let parseData = JSON.parse(data);
    if (parseData.status !== 200)
      return errorHandle(".py__addtheme-error-wrap", parseData.message);
    loading?.classList.remove("py__animate");
    return (location.href = location.origin);
  };

  // Download function
  const download = async (event) => {
    if (!event) return;
    event.preventDefault();

    let btn = event.target;
    let url = btn.getAttribute("href");
    let themeId = btn.getAttribute("data-id");
    let userId = btn.getAttribute("data-user-id");
    let data = userId
      ? { userId: userId, themeId: themeId }
      : { themeId: themeId };

    if (!url || !themeId) return;
    loading?.classList.add("py__animate");

    let res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let resData = await res.blob();
    if (!resData) return loading?.classList.remove("py__animate");
    let objectUrl = window.URL.createObjectURL(resData);
    let a = document.createElement("a");
    a.style.display = "none";
    a.href = objectUrl;
    a.download = themeName + ".zip";
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(objectUrl);
    a.remove();
    loading?.classList.remove("py__animate");
  };

  // View Iframe Fun
  const viewIframe = async () => {
    let iframes = document.querySelectorAll("iframe.py__view-iframe");
    if (!iframes?.length) return loading?.classList.remove("py__animate");
    let url = iframes[0].getAttribute("data-src")
      ? iframes[0].getAttribute("data-src")
      : iframes[0].getAttribute("src");
    if (!url) return loading?.classList.remove("py__animate");
    let res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(theme),
    });
    let data = await res.text();
    if (!data) return loading?.classList.remove("py__animate");
    let parser = new DOMParser();
    let html = parser.parseFromString(data, "text/html");
    for (let i = 0; i < iframes.length; i++) {
      let iframeItem = iframes[i];
      let ifrm =
        iframeItem.contentDocument || iframeItem.contentWindow.document;
      html
        ? (ifrm.querySelector("body").innerHTML =
            html.querySelector("body").innerHTML)
        : null;
    }
    loading?.classList.remove("py__animate");
  };

  // Ifeame Previews Function (Mobile, Desktop, Tablet)
  const toggleIframePreview = (event) => {
    if (!event) return;
    let el = event.target;
    let size = el.getAttribute("data-view");
    let iframe = document.querySelector(".py__view-iframe");
    document
      .querySelector(".py__button-view.active")
      .classList.remove("active");
    el.classList.add("active");
    iframe.style.width = size;
  };

  // Show Item From Global Settings Function (Color, padding, Margin and etc)
  const getItemFromSettings = async (event, another = false) => {
    if (!event) return;
    if (!another) event.preventDefault();

    let container = event.target.closest(".py__settings-item");
    let listenerBtn = another
      ? container.querySelector(".py__get-button")
      : event.target;
    let url = listenerBtn.getAttribute("href");
    let showTxt = listenerBtn.getAttribute("data-show");
    let hideTxt = listenerBtn.getAttribute("data-hide");
    let itemWrapToInner = container.querySelector(".py__get-result-wrapper");
    let getItem = container.querySelector("select");
    let getItemId = getItem && getItem.options[getItem.selectedIndex].innerHTML;
    let getItemIdClass = getItemId.toLowerCase().trim();

    if (getItemIdClass === "none" || getItemIdClass === "unset") return;

    if (itemWrapToInner.classList.contains("open") && !another) {
      itemWrapToInner.classList.remove("open");
      return (listenerBtn.textContent = showTxt);
    }

    if (
      !itemWrapToInner.classList.contains("open") &&
      itemWrapToInner.classList.contains("isAdded") &&
      !another
    ) {
      itemWrapToInner.classList.add("open");
      return (listenerBtn.textContent = hideTxt);
    }

    if (!url || !getItemId) return;
    let getUrl = url + "&item_id=" + getItemId.trim();

    let res = await fetch(getUrl);
    let data = await res.text();
    if (!data) return;
    let parser = new DOMParser();
    let html = parser.parseFromString(data, "text/html");
    let newSettingsItem = html.querySelector(".py__settings-item");
    itemWrapToInner.innerHTML = newSettingsItem
      ? newSettingsItem.innerHTML
      : null;
    if (!another) listenerBtn.textContent = hideTxt;
    if (!another) itemWrapToInner.classList.add("open", "isAdded");
  };

  // Change View Pages Function
  const changeViewPage = async (
    event = false,
    href = false,
    changeUrl = true
  ) => {
    loading?.classList.add("py__animate");
    let el = event ? event.target : null;
    let activeSidebarItem = document.querySelector(
      ".py__get-section-button.active"
    );
    let activeSidebarItemHandle =
      activeSidebarItem?.getAttribute("data-handle");
    let url = event
      ? activeSidebarItemHandle
        ? el.options[el.selectedIndex].getAttribute("data-href") +
          "&settings=" +
          activeSidebarItemHandle
        : el.options[el.selectedIndex].getAttribute("data-href")
      : href;
    if (!url) return;
    changeUrl ? window.history.replaceState({}, "", url) : null;
    let res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(theme),
    });
    let data = await res.text();
    if (!data) return loading?.classList.remove("py__animate");
    let parser = new DOMParser();
    let html = parser.parseFromString(data, "text/html");
    let oldSettingsWrap = document.querySelector(".py__make-settings");
    let newSettingsWrap = html.querySelector(".py__make-settings");
    let oldRemixSettings = document.querySelectorAll(
      ".py__make-random-settings"
    );
    let newRemixSettings = html.querySelectorAll(".py__make-random-settings");
    let oldSidebar = document.querySelector(".py__settings-select-options");
    let newSidebar = html.querySelector(".py__settings-select-options");
    oldSettingsWrap && newSettingsWrap
      ? (oldSettingsWrap.innerHTML = newSettingsWrap.innerHTML)
      : null;
    oldRemixSettings && newRemixSettings
      ? (oldRemixSettings.innerHTML = newRemixSettings)
      : null;
    oldSidebar && newSidebar
      ? (oldSidebar.innerHTML = newSidebar.innerHTML)
      : null;
    let ifrmaes = document.querySelectorAll(".py__view-iframe");
    if (ifrmaes?.length) {
      for (let i = 0; i < ifrmaes?.length; i++) {
        let iframe = ifrmaes[i];
        iframe.setAttribute("data-src", url.replace("themes", "view"));
      }
    }
    await viewIframe();
  };

  // Get Global settings or Section settings dynamic function
  const getSettingsLists = async (event) => {
    if (!event) return;

    loading?.classList.add("py__animate");
    let el = event.target,
      url = null;
    if (event.type === "change") {
      url = el.options[el.selectedIndex].getAttribute("data-href");
    } else {
      event.preventDefault();
      if (el.getAttribute("data-handle") && el.classList.contains("active")) {
        let currenturlSearchParam = new URLSearchParams(location.search);
        currenturlSearchParam.delete("settings");
        let newUrl =
          location.origin +
          location.pathname +
          "?" +
          currenturlSearchParam.toString();
        url = newUrl;
      } else {
        url = el.getAttribute("href");
      }
    }

    if (!url) return;

    window.history.replaceState({}, "", url);
    let urlSearch = new URLSearchParams(url);
    let sectionName = urlSearch.get("section");
    let iframe = document.querySelector(".py__view-iframe");

    el.classList.add("active");
    let res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(theme),
    });
    let data = await res.text();

    if (!data) return loading?.classList.remove("py__animate");
    let parser = new DOMParser();
    let html = parser.parseFromString(data, "text/html");
    let oldSettingsWrap = document.querySelector(".py__make-settings");
    let newSettingsWrap = html.querySelector(".py__make-settings");
    let oldSidebar = document.querySelector(".py__settings-select-options");
    let newSidebar = html.querySelector(".py__settings-select-options");
    oldSettingsWrap && newSettingsWrap
      ? (oldSettingsWrap.innerHTML = newSettingsWrap.innerHTML)
      : null;
    oldSidebar && newSidebar
      ? (oldSidebar.innerHTML = newSidebar.innerHTML)
      : null;
    if (sectionName) {
      let urlParams = new URL(location.href);
      let iframeSearchParams = new URLSearchParams(urlParams.search);
      iframeSearchParams.set("section", sectionName);
      let iframeUrl =
        urlParams.pathname.indexOf("/users/") !== -1
          ? "/view" + urlParams.pathname + "?" + iframeSearchParams.toString()
          : urlParams.pathname.replace("themes", "view") +
            "?" +
            iframeSearchParams.toString();
      iframe.setAttribute("data-src", iframeUrl);
      await viewIframe();
    } else {
      let urlParams = new URL(location.href);
      let iframeSearchParams = new URLSearchParams(urlParams.search);
      let iframeUrl =
        urlParams.pathname.indexOf("/users/") !== -1
          ? "/view" + urlParams.pathname + "?" + iframeSearchParams.toString()
          : urlParams.pathname.replace("themes", "view") +
            "?" +
            iframeSearchParams.toString();
      iframe.setAttribute("data-src", iframeUrl);
      await viewIframe();
    }
  };

  const getRandomSections = async () => {
    let url = "/remix" + location?.search;
    let res = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let data = await res.text();
    if (!data) return loading?.classList.remove("py__animate");
    let parser = new DOMParser();
    let html = parser.parseFromString(data, "text/html");
    let randomSettingsNew = html?.querySelector(".py__make-random-settings");
    let randomSettingsOld = document.querySelector(".py__make-random-settings");
    if (randomSettingsOld && randomSettingsNew)
      randomSettingsOld.innerHTML = randomSettingsNew.innerHTML;
  };

  // XMLHttpRequest
  const makeXMLRequest = (method, url, data = false) => {
    return new Promise(function (resolve, reject) {
      var http = new XMLHttpRequest();

      http.onreadystatechange = function () {
        if (http.readyState == 4 && http.status == 200) {
          resolve(JSON.parse(http.responseText).result);
        }
      };

      http.open(method, url, true);
      data ? http.send(JSON.stringify(data)) : http.send();
    });
  };

  // RGB TO HEX COLOR code converter
  const componentToHex = async (c) => {
    let hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const rgbToHex = async (rgb) => {
    return (
      "#" +
      (await componentToHex(rgb[0])) +
      (await componentToHex(rgb[1])) +
      (await componentToHex(rgb[2]))
    );
  };

  let remixCount = 0;
  // let defaultSettingsCount = 0;
  const randomFun = async (event) => {
    var colorGradientor = (p, rgb_beginning, rgb_end) => {
      var w = p * 2 - 1;

      var w1 = (w + 1) / 2.0;
      var w2 = 1 - w1;

      var rgb = [
        parseInt(rgb_beginning[0] * w1 + rgb_end[0] * w2),
        parseInt(rgb_beginning[1] * w1 + rgb_end[1] * w2),
        parseInt(rgb_beginning[2] * w1 + rgb_end[2] * w2),
      ];
      return rgb;
    };

    if (!event) return;
    event.preventDefault();
    loading?.classList.add("py__animate");

    let inputFileds = document.querySelectorAll("[name]");
    let mode =
      document.querySelector(".py__random-colors-mode")?.value || "default";

    let rgbBegin = [];
    let rgbEnd = [];
    for (let i = 0; i < 3; i++) {
      rgbBegin[i] = Math.floor(Math.random() * 255);
      rgbEnd[i] = Math.floor(Math.random() * 255);
    }
    let colorsList = [];
    colorsList.push(rgbBegin);
    colorsList.push(rgbEnd);
    colorsList.push(colorGradientor(0.2, rgbBegin, rgbEnd));
    colorsList.push(colorGradientor(0.5, rgbBegin, rgbEnd));
    colorsList.push(colorGradientor(0.7, rgbBegin, rgbEnd));

    console.log("colorlist", colorsList);
    if (!inputFileds.length) return loading?.classList.remove("py__animate");
    let index = 0;

    for (let i = 0; i < inputFileds.length; i++) {
      let filed = inputFileds[i];
      let filedType = filed.getAttribute("type");
      let filedName = filed.getAttribute("name");
      if (filedType === "color") {
        if (filedName.includes("_bg")) {
          let colorObj = await rgbToHex(colorsList[index]);
          let color = filedName?.includes("color_dark")
            ? "#000000"
            : filedName?.includes("color_light")
            ? "#FFFFFF"
            : colorObj;
          let closestWrap = filed.closest(".component-is-color");
          let isColorLabel = closestWrap.querySelector(".py__label-for-color");
          isColorLabel.style.backgroundColor = color;
          index++;
          filed.value = color;
          let filedNameText = filedName.replace("_bg", "");
          let textInputFiled = document.querySelector(
            `[name="${filedNameText}"]`
          );
          if (textInputFiled) {
            let textColor = filedNameText?.includes("color_dark")
              ? "#000000"
              : filedNameText?.includes("color_light")
              ? "#FFFFFF"
              : colorObj;
            let textClosestWrap = textInputFiled.closest(".component-is-color");
            let textIsColorLabel = textClosestWrap?.querySelector(
              ".py__label-for-color"
            );
            if (textIsColorLabel)
              textIsColorLabel.style.backgroundColor = textColor;
            textInputFiled.value = textColor;
          }
        }
      } else if (filedType === "select") {
        let options = filed.getElementsByTagName("option");
        let sectionContainer = filed.closest(".py__closest");
        let fontObj = fonts[fontsCount];
        if (filed.getAttribute("name")?.includes("font")) {
          let selectedOption = filed.getAttribute("name")?.includes("body")
            ? filed.querySelector(`option[value="${fontObj.body}"`)?.index
            : filed.querySelector(`option[value="${fontObj.heading}"`)?.index;
          filed.selectedIndex = selectedOption;
        } else if (filed.getAttribute("name")?.includes("bg")) {
          let optionIndex = Math.floor(Math.random() * options.length);
          filed.selectedIndex = optionIndex;
          let bgCName = options[optionIndex]?.textContent
            ?.toLowerCase()
            ?.replace(" ", "_");
          let getBgColorHexCode =
            bgCName &&
            bgCName !== "bg-c-none" &&
            bgCName !== "bg-c-un" &&
            bgCName !== "transparent" &&
            bgCName !== "unset" &&
            bgCName !== "none"
              ? document.querySelector(`[name="py_bg_color_${bgCName}"]`)?.value
              : null;
          let textFiledName = filed.getAttribute("name").replace("_bg", "");
          let textColorInput = sectionContainer.querySelectorAll(
            `[name^="${textFiledName}"]`
          );
          console.log(bgCName, getBgColorHexCode, textColorInput, "Text Items");
          if (textColorInput?.length) {
            for (let i = 0; i < textColorInput?.length; i++) {
              let itemColor = textColorInput[i];
              let contrastColor = getBgColorHexCode
                ? await getContrastYIQ(getBgColorHexCode)
                : "#000000";
              itemColor.selectedIndex = [...itemColor.options].findIndex(
                (option) =>
                  document.querySelector(
                    `[name="py_color_${option.textContent
                      ?.toLowerCase()
                      ?.replace(" ", "_")}"]`
                  )?.value === contrastColor
              );
            }
          }
        } else if (!filed.getAttribute("name")?.includes("color")) {
          let optionIndex = Math.floor(Math.random() * options.length);
          filed.selectedIndex = optionIndex;
        }
      }
    }

    let imageBannerSection = document.querySelector(
      '[data-file-name="image-banner"]'
    );
    let imageBannerContent =
      imageBannerSection && imageBannerSection?.closest(".py__closest");
    let imageBannerBlocks =
      imageBannerContent &&
      imageBannerContent.querySelectorAll(".py__settings-block-item");
    if (imageBannerSection && imageBanner[remixCount]) {
      let fileds = imageBannerSection.querySelectorAll("[name]");
      if (fileds?.length) {
        for (let i = 0; i < fileds.length; i++) {
          let filed = fileds[i];
          let filedName = filed.getAttribute("name");
          if (typeof imageBanner[remixCount][filedName] !== "undefined")
            filed.value = imageBanner[remixCount][filedName];
        }
      }
    }
    if (imageBannerBlocks?.length) {
      for (let i = 0; i < imageBannerBlocks.length; i++) {
        let block = imageBannerBlocks[i];
        let blockType = block.getAttribute("data-type");
        let findAllFileds = block.querySelectorAll("[name]");
        if (findAllFileds?.length) {
          for (let j = 0; j < findAllFileds.length; j++) {
            let filed = findAllFileds[j];
            let filedName = filed.getAttribute("name");
            if (
              imageBanner[remixCount]?.blocks &&
              imageBanner[remixCount]?.blocks[blockType] &&
              typeof imageBanner[remixCount]?.blocks[blockType][filedName] !==
                "undefined"
            )
              filed.value =
                imageBanner[remixCount]?.blocks[blockType][filedName];
          }
        }
      }
    }

    remixCount++;
    if (remixCount >= imageBanner?.length) remixCount = 0;
    fontsCount >= fonts.length ? (fontsCount = 0) : fontsCount++;

    await saveSettingsValues();
    await viewIframe();
  };

  // Remix Section Styles Function
  const randomSectionFun = async (event) => {
    if (!event) return;
    let el = event.target;
    let sectionContainer = el.closest(".py__closest");
    let typeSelects = sectionContainer?.querySelectorAll('[type="select"]');
    let typeCheckboxs = sectionContainer?.querySelectorAll('[type="checkbox"]');
    if (typeSelects?.length) {
      for (let i = 0; i < typeSelects?.length; i++) {
        let select = typeSelects[i];
        let selectName = select.getAttribute("name");
        if (selectName.includes("bg")) {
          let options = select.getElementsByTagName("option");
          let optionIndex = Math.floor(Math.random() * options?.length);
          select.selectedIndex = optionIndex;
          let colorCode = options[optionIndex].getAttribute("data-value");
          let textUniqName = selectName.replace("bg_", "");
          let textColorInput = sectionContainer.querySelectorAll(
            `[name^="${textUniqName}"]`
          );
          if (textColorInput?.length) {
            for (let i = 0; i < textColorInput?.length; i++) {
              let itemColor = textColorInput[i];
              let contrastColor =
                colorCode &&
                colorCode !== "bg-c-none" &&
                colorCode !== "bg-c-un"
                  ? await getContrastYIQ(colorCode)
                  : "#000000";
              itemColor.selectedIndex = [...itemColor.options].findIndex(
                (option) => option.getAttribute("data-value") === contrastColor
              );
            }
          }
        } else if (!selectName?.includes("color")) {
          let options = select.getElementsByTagName("option");
          let optionIndex = Math.floor(Math.random() * options?.length);
          select.selectedIndex = optionIndex;
        }
      }
    }
    if (typeCheckboxs?.length) {
      for (let i = 0; i < typeCheckboxs?.length; i++) {
        let checkbox = typeCheckboxs[i];
        checkbox.checked
          ? (checkbox.checked = false)
          : (checkbox.checked = true);
        let checkboxContent = checkbox?.closest(".py__comp-checkbox");
        let hiddenFiled = checkboxContent?.querySelector(
          'input[type="hidden"]'
        );
        hiddenFiled.value = checkbox.checked ? true : false;
      }
    }

    await saveSettingsValues();
    await viewIframe();
  };

  //---------------------------------------
  // COMPONENTS FUN
  //---------------------------------------
  // Color Component Function
  const colorComp = async (event) => {
    if (!event) return;
    let uniqName = event.target.getAttribute("name");
    let value = event.target.value;
    let wrapper = event.target.closest(".component-is-color");
    let isColor = wrapper?.querySelector(".is__color");
    let forColor = wrapper?.querySelector(".py__label-for-color");
    if (isColor) isColor.value = value;
    if (forColor) forColor.style.backgroundColor = value;
    await saveSettingsValues();

    if (uniqName.includes("bg")) {
      let textUniqName = uniqName.replace("bg_", "");
      let findInColorsJson = colorsNamesContrast[uniqName];
      let textColorInput = findInColorsJson
        ? document.querySelector(`[name="${findInColorsJson}"]`)
        : document.querySelector(`[name="${textUniqName}"]`);
      if (textColorInput) {
        let newColor = getContrastYIQ(value);
        let childWrapper = textColorInput.closest(".component-is-color");
        let childIsColor = childWrapper?.querySelector(".is__color");
        let childForColor = childWrapper?.querySelector(".py__label-for-color");
        if (childIsColor) childIsColor.value = newColor;
        if (childForColor) childForColor.style.backgroundColor = newColor;
        textColorInput.value = newColor;
      }
    }
    saveButton?.setAttribute("aria-disabled", false);
    await viewIframe();
  };
  // Text Component Function
  const textComp = async (event) => {
    if (!event) return;
    let el = event.target;
    let uniqName = el?.getAttribute("name");
    let value = el?.value;
    await saveSettingsValues();
    value !== focuseValue ? await viewIframe() : null;
    if (uniqName === "settings_theme_name" && value !== focuseValue)
      themeName = value;
    saveButton?.setAttribute("aria-disabled", false);
  };
  const colorTextComp = async (event) => {
    if (!event) return;
    let el = event.target;
    let value = el?.value;
    let closest = el.closest(".component-is-color");
    let range = closest.querySelector('input[type="color"]');
    let label = closest.querySelector(".py__label-for-color");
    range.value = value;
    label.style.backgroundColor = value;
    await saveSettingsValues();
    await viewIframe();
  };
  // Textarea Component Function
  const textareaComp = async (event) => {
    if (!event) return;
    let uniqName = event.target.getAttribute("name");
    let value = event.target.value;
    await saveSettingsValues();
    value !== focuseValue ? await viewIframe() : null;
    saveButton?.setAttribute("aria-disabled", false);
  };
  // Richtext Component Function
  const richtextComp = async (event) => {
    if (!event) return;
    let uniqName = event.target.getAttribute("name");
    let value = event.target.value;
    await saveSettingsValues();
    value !== focuseValue ? await viewIframe() : null;
    saveButton?.setAttribute("aria-disabled", false);
  };
  // Select Component Function
  const selectComp = async (event) => {
    if (!event) return;
    let uniqName = event.target.getAttribute("name");
    let value = event.target.value;
    let container = event.target.closest(".py__closest");
    let colorCode = event.target.selectedOptions[0].getAttribute("data-value");
    if (
      uniqName.includes("bg") &&
      value !== "bg-c-none" &&
      value !== "bg-c-un" &&
      value
    ) {
      let textUniqName = uniqName.replace("bg_", "");
      let textColorInput = container.querySelectorAll(
        `[name^="${textUniqName}"]`
      );
      if (textColorInput?.length) {
        for (let i = 0; i < textColorInput?.length; i++) {
          let itemColor = textColorInput[i];
          let contrastColor = await getContrastYIQ(colorCode);
          itemColor.selectedIndex = [...itemColor.options].findIndex(
            (option) => option.getAttribute("data-value") === contrastColor
          );
        }
      }
    }

    await saveSettingsValues();
    await viewIframe();
    saveButton?.setAttribute("aria-disabled", false);
  };
  // Checkbox Component Function
  const checkboxComp = async (event) => {
    if (!event) return;
    let uniqName = event.target.getAttribute("name");
    let content = event.target.closest(".py__comp-checkbox");
    let hiddenFiled = content.querySelector('input[type="hidden"]');
    hiddenFiled.value = event.target.checked ? true : false;
    let value = hiddenFiled.value;
    await saveSettingsValues();
    await viewIframe();
    saveButton?.setAttribute("aria-disabled", false);
  };
  // Range Component Function
  const rangeComp = async (event) => {
    if (!event) return;
    let uniqName = event.target.getAttribute("name");
    let value = event.target.value;
    await saveSettingsValues();
    await viewIframe();
    saveButton?.setAttribute("aria-disabled", false);
  };

  //---------------------------------------
  // EVENTS LISTENERS
  //---------------------------------------
  // Input fileds change fun (color, select and etc)
  document.addEventListener("change", (e) => {
    if (e && e.target.getAttribute("name")) {
      let type = e.target.getAttribute("type");
      switch (type) {
        case "color":
          colorComp(e);
          break;
        case "select":
          selectComp(e);
          break;
        case "range":
          rangeComp(e);
          break;
        default:
          break;
      }
    }
    if (e && e.target.classList.contains("is__checkbox"))
      return checkboxComp(e);
    if (e && e.target.classList.contains("py__preview-pages-select"))
      return changeViewPage(e);
    if (e && e.target.classList.contains("py__sections-dropdown-listener"))
      return getSettingsLists(e);
  });

  // Input fileds Focus fun (text, textarea and etc)
  document.addEventListener(
    "focus",
    (e) => {
      if (e && e.target.getAttribute("name")) {
        let type = e.target.getAttribute("type");
        switch (type) {
          case "text":
            focuseValue = e.target.value;
            break;
          case "textarea":
            focuseValue = e.target.value;
            break;
          case "richtext":
            focuseValue = e.target.value;
            break;
          default:
            break;
        }
      }
    },
    true
  );

  // Input fileds Blur fun (text, textarea and etc)
  document.addEventListener(
    "blur",
    (e) => {
      if (e && e.target.getAttribute("name")) {
        let type = e.target.getAttribute("type");
        switch (type) {
          case "text":
            textComp(e);
            break;
          case "textarea":
            textareaComp(e);
            break;
          case "richtext":
            richtextComp(e);
            break;
          default:
            break;
        }
      } else if (e && e.target.classList.contains("is__color")) {
        return colorTextComp(e);
      }
    },
    true
  );

  // Form Submit fun
  document.addEventListener("submit", (e) => {
    if (e && e.target.classList.contains("py__signup-form")) return signup(e);
    if (e && e.target.classList.contains("py__login-form")) return login(e);
    if (e && e.target.classList.contains("py__addtheme-form"))
      return addTheme(e);
  });

  // Sidebar Select Settings Open Close Fun
  document.addEventListener("click", (e) => {
    if (e && e.target.classList.contains("py__settings-item-name")) {
      e.target
        .closest(".py__settings-item-wrapper")
        .classList.contains("active")
        ? e.target
            .closest(".py__settings-item-wrapper")
            .classList.remove("active")
        : e.target
            .closest(".py__settings-item-wrapper")
            .classList.add("active");
    }
    if (e && e.target.classList.contains("py__signup-button"))
      return getRegister(e);
    if (e && e.target.classList.contains("py__login-button"))
      return getLogin(e);
    if (e && e.target.classList.contains("py__button-add-theme"))
      return getAddTheme(e);
    if (e && e.target.classList.contains("py__signup"))
      return e.target.remove();
    if (e && e.target.classList.contains("py__login")) return e.target.remove();
    if (e && e.target.classList.contains("py__addtheme"))
      return e.target.remove();
    if (e && e.target.classList.contains("py__get-button"))
      return getItemFromSettings(e);
    if (e && e.target.classList.contains("py__button-view"))
      return toggleIframePreview(e);
    if (e && e.target.classList.contains("py__get-section-button"))
      return getSettingsLists(e);
    if (e && e.target.classList.contains("py__save-button")) return save(e);
    if (e && e.target.classList.contains("py__save-figma-button"))
      return saveFigma(e);
    if (e && e.target.classList.contains("py__download-button"))
      return download(e);
    if (e && e.target.classList.contains("py__button-random"))
      return randomFun(e);
    if (e && e.target.classList.contains("py__remix-section-styles-btn"))
      return randomSectionFun(e);
  });

  // Before Unload
  window.addEventListener("beforeunload", function (e) {
    if (!saveButton || saveButton?.getAttribute("aria-disabled") === "true")
      return undefined;
    let confirmationMessage =
      "If you leave before saving, your changes will be lost.";
    (e || window.event).returnValue = confirmationMessage;
    return confirmationMessage;
  });

  // When Page Content is Loaded
  document.addEventListener("DOMContentLoaded", async () => {
    await saveSettingsValues();
    loading = document.querySelector(".py__loading-wrap");
    saveButton = document.querySelector(".py__save-button");
    downloadButton = document.querySelector(".py__download-button");
    themeName =
      document.querySelector('[name="settings_theme_name"]')?.value ||
      "ThemeMake";
  });
})();

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

  const imageBanner = {
    "6306f8e7db2cbec8c440f780": [
      {
        "164253890362d227ae": {
          type: "image-banner",
          settings: {
            image: "/6306f8e7db2cbec8c440f780/image-banner-v6-desktop.webp",
            show_lazy: true,
            image_2: "/6306f8e7db2cbec8c440f780/image-banner-v6-mobile.webp",
            url: "shopify://collections/all",
            show_override: true,
            content_bg_color: "var(--py-bg-color-dark)",
            ov_bg_image: "",
            ov_opacity: "0.4",
            pv: "center",
            ph: "center",
            align: "center",
            padding: "",
            margin: "",
            width: "",
            height: "",
            c_css:
              "flex-direction: column;\njustify-content: end;\npadding-bottom:30px;",
            m_pv: "center",
            m_ph: "center",
            m_align: "center",
            m_padding: "",
            m_margin: "",
            m_width: "",
            m_height: "",
            m_c_css:
              "flex-direction: column;\njustify-content: end;\npadding-bottom:30px;",
            enable_anim: true,
            anim: "zoom-in",
          },
          blocks: {
            "16425389039f659f32-0": {
              type: "heading",
              settings: {
                heading:
                  '<div class="grid grid--1-col"> <div class="grid__item font-larger">Green Fiend</div><div class="grid__item font-small">Our botanicals bring the outside in</div></div>',
                align: "center",
                content_color: "var(--py-color-light)",
                weight: "400",
                size: "50px",
                padding: "",
                margin: "",
                width: "",
                height: "",
                c_css: "",
                m_align: "center",
                content_color_m: "var(--py-color-light)",
                m_weight: "",
                m_size: "",
                m_padding: "",
                m_margin: "",
                m_width: "",
                m_height: "",
                m_c_css: "font-size:30px",
              },
            },
            "16425389039f659f32-2": {
              type: "buttons",
              settings: {
                button_label_1: "SHOP NOW",
                button_link_1: "shopify://collections/all",
                view_btn_size: "large",
                align: "right",
                content_color_view_btn: "dark",
                content_bg_color_view_btn: "light",
                content_color_view_btn_hover: "light",
                content_bg_color_view_btn_hover: "dark",
                c_css: "border-width:0px;\nmargin-right: 1rem",
              },
            },
          },
          block_order: ["16425389039f659f32-0", "16425389039f659f32-2"],
        },
      },
      {
        "164253890362d227ae": {
          type: "image-banner",
          settings: {
            image: "/6306f8e7db2cbec8c440f780/image-banner-v7-desktop.webp",
            show_lazy: true,
            image_2: "/6306f8e7db2cbec8c440f780/image-banner-v7-mobile.webp",
            url: "shopify://collections/all",
            show_override: true,
            content_bg_color: "var(--py-bg-color-dark)",
            ov_bg_image: "",
            ov_opacity: "0.4",
            pv: "center",
            ph: "center",
            align: "left",
            padding: "",
            margin: "",
            width: "",
            height: "",
            c_css:
              "flex-direction: column;\njustify-content: end;\npadding-bottom:30px;",
            m_pv: "center",
            m_ph: "center",
            m_align: "left",
            m_padding: "",
            m_margin: "",
            m_width: "",
            m_height: "",
            m_c_css:
              "flex-direction: column;\njustify-content: end;\npadding-bottom:30px;",
            enable_anim: true,
            anim: "zoom-in",
          },
          blocks: {
            "16425389039f659f32-0": {
              type: "heading",
              settings: {
                heading:
                  '<div class="grid grid--1-col"> <div class="grid__item font-larger">Beauty You</div><div class="grid__item font-small">It smartly nourish your skin with lotions, day creams, night creams, tinted moisturizers.</div></div>',
                align: "left",
                content_color: "var(--py-color-light)",
                weight: "400",
                size: "50px",
                padding: "",
                margin: "",
                width: "",
                height: "",
                c_css: "",
                m_align: "left",
                content_color_m: "var(--py-color-light)",
                m_weight: "",
                m_size: "",
                m_padding: "",
                m_margin: "",
                m_width: "",
                m_height: "",
                m_c_css: "font-size:30px",
              },
            },
            "16425389039f659f32-2": {
              type: "buttons",
              settings: {
                button_label_1: "Shop Chamarel",
                button_link_1: "shopify://collections/all",
                view_btn_size: "large",
                align: "left",
                content_color_view_btn: "dark",
                content_bg_color_view_btn: "light",
                content_color_view_btn_hover: "light",
                content_bg_color_view_btn_hover: "dark",
                c_css: "border-width:0px;\nmargin-left: 1rem",
              },
            },
          },
          block_order: ["16425389039f659f32-0", "16425389039f659f32-2"],
        },
      },
      {
        "164253890362d227ae": {
          type: "image-banner",
          settings: {
            image: "/6306f8e7db2cbec8c440f780/image-banner-v8-desktop.webp",
            show_lazy: true,
            image_2: "/6306f8e7db2cbec8c440f780/image-banner-v8-mobile.webp",
            url: "shopify://collections/all",
            show_override: true,
            content_bg_color: "var(--py-bg-color-dark)",
            ov_bg_image: "",
            ov_opacity: "0.4",
            pv: "center",
            ph: "center",
            align: "right",
            padding: "",
            margin: "",
            width: "",
            height: "",
            c_css:
              "flex-direction: column;\njustify-content: end;\npadding-bottom:30px;",
            m_pv: "center",
            m_ph: "center",
            m_align: "right",
            m_padding: "",
            m_margin: "",
            m_width: "",
            m_height: "",
            m_c_css:
              "flex-direction: column;\njustify-content: end;\npadding-bottom:30px;",
            enable_anim: true,
            anim: "zoom-in",
          },
          blocks: {
            "16425389039f659f32-0": {
              type: "heading",
              settings: {
                heading:
                  '<div class="grid grid--1-col"> <div class="grid__item font-larger">Beauty Deal</div><div class="grid__item font-small">50% OFF on the most popular cosmetic brands. Order all classy products today!</div></div>',
                align: "right",
                content_color: "var(--py-color-light)",
                weight: "400",
                size: "50px",
                padding: "",
                margin: "",
                width: "",
                height: "",
                c_css: "",
                m_align: "right",
                content_color_m: "var(--py-color-light)",
                m_weight: "",
                m_size: "",
                m_padding: "",
                m_margin: "",
                m_width: "",
                m_height: "",
                m_c_css: "font-size:30px",
              },
            },
            "16425389039f659f32-2": {
              type: "buttons",
              settings: {
                button_label_1: "SHOP NOW",
                button_link_1: "shopify://collections/all",
                view_btn_size: "large",
                align: "right",
                content_color_view_btn: "dark",
                content_bg_color_view_btn: "light",
                content_color_view_btn_hover: "light",
                content_bg_color_view_btn_hover: "dark",
                c_css: "border-width:0px;\nmargin-right: 1rem",
              },
            },
          },
          block_order: ["16425389039f659f32-0", "16425389039f659f32-2"],
        },
      },
      {
        "164253890362d227ae": {
          type: "image-banner",
          settings: {
            image: "/6306f8e7db2cbec8c440f780/image-banner-v9-desktop.webp",
            show_lazy: true,
            image_2: "/6306f8e7db2cbec8c440f780/image-banner-v9-mobile.webp",
            url: "shopify://collections/all",
            show_override: true,
            content_bg_color: "var(--py-bg-color-dark)",
            ov_bg_image: "",
            ov_opacity: "0.4",
            pv: "center",
            ph: "center",
            align: "left",
            padding: "",
            margin: "",
            width: "",
            height: "",
            c_css: "",
            m_pv: "center",
            m_ph: "center",
            m_align: "left",
            m_padding: "",
            m_margin: "",
            m_width: "",
            m_height: "",
            m_c_css: "",
            enable_anim: true,
            anim: "zoom-in",
          },
          blocks: {
            "16425389039f659f32-0": {
              type: "heading",
              settings: {
                heading:
                  '<div class="grid grid--1-col">  <div class="grid__item font-x-small">THE TRANSEASONAL EDIT</div>  <div class="grid__item font-larger">Best-selling classics</div><div class="grid__item font-small">Go-to swimsuits designed to last you season after season.</div></div>',
                align: "left",
                content_color: "var(--py-color-light)",
                weight: "400",
                size: "50px",
                padding: "",
                margin: "",
                width: "",
                height: "",
                c_css: "",
                m_align: "left",
                content_color_m: "var(--py-color-light)",
                m_weight: "",
                m_size: "",
                m_padding: "",
                m_margin: "",
                m_width: "",
                m_height: "",
                m_c_css: "font-size:30px",
              },
            },
            "16425389039f659f32-2": {
              type: "buttons",
              settings: {
                button_label_1: "Shop Chamarel",
                button_link_1: "shopify://collections/all",
                view_btn_size: "large",
                align: "left",
                content_color_view_btn: "dark",
                content_bg_color_view_btn: "light",
                content_color_view_btn_hover: "light",
                content_bg_color_view_btn_hover: "dark",
                c_css: "border-width:0px;\nmargin-left: 1rem",
              },
            },
          },
          block_order: ["16425389039f659f32-0", "16425389039f659f32-2"],
        },
      },
      {
        "164253890362d227ae": {
          type: "image-banner",
          settings: {
            image: "/6306f8e7db2cbec8c440f780/image-banner-v5-desktop.webp",
            show_lazy: true,
            image_2: "/6306f8e7db2cbec8c440f780/image-banner-v5-mobile.webp",
            url: "shopify://collections/all",
            show_override: true,
            content_bg_color: "var(--py-bg-color-dark)",
            ov_bg_image: "",
            ov_opacity: "0.4",
            pv: "center",
            ph: "center",
            align: "center",
            padding: "",
            margin: "",
            width: "",
            height: "",
            c_css: "",
            m_pv: "center",
            m_ph: "center",
            m_align: "center",
            m_padding: "",
            m_margin: "",
            m_width: "",
            m_height: "",
            m_c_css: "",
            enable_anim: true,
            anim: "zoom-in",
          },
          blocks: {
            "16425389039f659f32-0": {
              type: "heading",
              settings: {
                heading:
                  '<div class="grid grid--1-col">  <div class="grid__item font-xx-small">NEW COLLECTION</div>  <div class="grid__item font-larger">Jackets & Liners</div></div>',
                align: "center",
                content_color: "var(--py-color-light)",
                weight: "400",
                size: "50px",
                padding: "",
                margin: "",
                width: "",
                height: "",
                c_css: "",
                m_align: "center",
                content_color_m: "var(--py-color-light)",
                m_weight: "",
                m_size: "",
                m_padding: "",
                m_margin: "",
                m_width: "",
                m_height: "",
                m_c_css: "font-size:30px",
              },
            },
            "16425389039f659f32-2": {
              type: "buttons",
              settings: {
                button_label_1: "EXPLORE ALL",
                button_link_1: "shopify://collections/all",
                view_btn_size: "medium",
                align: "center",
                content_color_view_btn: "dark",
                content_bg_color_view_btn: "light",
                content_color_view_btn_hover: "light",
                content_bg_color_view_btn_hover: "dark",
                c_css: "border-width:0px;",
              },
            },
          },
          block_order: ["16425389039f659f32-0", "16425389039f659f32-2"],
        },
      },
      {
        "164253890362d227ae": {
          type: "image-banner",
          settings: {
            image: "/6306f8e7db2cbec8c440f780/image-banner-v4-desktop.webp",
            show_lazy: true,
            image_2: "/6306f8e7db2cbec8c440f780/image-banner-v4-mobile.jpg",
            url: "shopify://collections/all",
            show_override: true,
            content_bg_color: "var(--py-bg-color-dark)",
            ov_bg_image: "",
            ov_opacity: "0.4",
            pv: "center",
            ph: "center",
            align: "left",
            padding: "",
            margin: "",
            width: "",
            height: "",
            c_css: "",
            m_pv: "center",
            m_ph: "center",
            m_align: "left",
            m_padding: "",
            m_margin: "",
            m_width: "",
            m_height: "",
            m_c_css: "",
            enable_anim: true,
            anim: "zoom-in",
          },
          blocks: {
            "16425389039f659f32-0": {
              type: "heading",
              settings: {
                heading:
                  '<div class="grid grid--1-col">  <div class="grid__item font-xx-small"><span>1926 AT SEA</span></div>  <div class="grid__item font-larger">THE FIRST WATERPROOF WRISTWATCH</div></div>',
                align: "left",
                content_color: "var(--py-color-light)",
                weight: "400",
                size: "50px",
                padding: "",
                margin: "",
                width: "",
                height: "",
                c_css: "max-width:800px;\nmargin:0 20px;",
                m_align: "left",
                content_color_m: "var(--py-color-light)",
                m_weight: "",
                m_size: "",
                m_padding: "",
                m_margin: "",
                m_width: "",
                m_height: "",
                m_c_css: "font-size:30px",
              },
            },
            "16425389039f659f32-2": {
              type: "buttons",
              settings: {
                button_label_1: "SHOP WATCH",
                button_link_1: "shopify://collections/all",
                view_btn_size: "large",
                align: "left",
                content_color_view_btn: "dark",
                content_bg_color_view_btn: "light",
                content_color_view_btn_hover: "light",
                content_bg_color_view_btn_hover: "dark",
                c_css: "border-width:0px;\nmargin:0 20px;",
              },
            },
          },
          block_order: ["16425389039f659f32-0", "16425389039f659f32-2"],
        },
      },
      {
        "164253890362d227ae": {
          type: "image-banner",
          settings: {
            image: "/6306f8e7db2cbec8c440f780/image-banner-v3-desktop.webp",
            show_lazy: true,
            image_2: "/6306f8e7db2cbec8c440f780/image-banner-v3-mobile.webp",
            url: "shopify://collections/all",
            show_override: true,
            content_bg_color: "var(--py-bg-color-dark)",
            ov_bg_image: "",
            ov_opacity: "0.4",
            pv: "center",
            ph: "center",
            align: "center",
            padding: "",
            margin: "",
            width: "",
            height: "",
            c_css: "",
            m_pv: "center",
            m_ph: "center",
            m_align: "center",
            m_padding: "",
            m_margin: "",
            m_width: "",
            m_height: "",
            m_c_css: "",
            enable_anim: true,
            anim: "zoom-out",
          },
          blocks: {
            "16425389039f659f32-0": {
              type: "heading",
              settings: {
                heading:
                  '<div class="grid grid--1-col">  <div class="grid__item">SAGE</div>  <div class="grid__item">COLLECTION</div></div>',
                align: "center",
                content_color: "var(--py-color-light)",
                weight: "400",
                size: "100px",
                padding: "",
                margin: "",
                width: "",
                height: "",
                c_css: "max-width:800px;\nmargin:auto;",
                m_align: "center",
                content_color_m: "var(--py-color-light)",
                m_weight: "",
                m_size: "",
                m_padding: "",
                m_margin: "",
                m_width: "",
                m_height: "",
                m_c_css: "font-size:30px",
              },
            },
            "16425389039f659f32-2": {
              type: "buttons",
              settings: {
                button_label_1: "LEARN MORE",
                button_link_1: "shopify://collections/all",
                view_btn_size: "large",
                align: "center",
                content_color_view_btn: "dark",
                content_bg_color_view_btn: "light",
                content_color_view_btn_hover: "light",
                content_bg_color_view_btn_hover: "dark",
                c_css: "border-width:0px;",
              },
            },
          },
          block_order: ["16425389039f659f32-0", "16425389039f659f32-2"],
        },
      },
      {
        "164253890362d227ae": {
          type: "image-banner",
          settings: {
            image: "/6306f8e7db2cbec8c440f780/image-banner-v1-desktop.webp",
            show_lazy: true,
            image_2: "/6306f8e7db2cbec8c440f780/image-banner-v1-mobile.webp",
            url: "shopify://collections/all",
            show_override: true,
            content_bg_color: "var(--py-bg-color-dark)",
            ov_bg_image: "",
            ov_opacity: "0.4",
            pv: "center",
            ph: "center",
            align: "left",
            padding: "",
            margin: "",
            width: "",
            height: "",
            c_css: "",
            m_pv: "center",
            m_ph: "center",
            m_align: "center",
            m_padding: "",
            m_margin: "",
            m_width: "",
            m_height: "",
            m_c_css: "",
            enable_anim: true,
            anim: "zoom-out",
          },
          blocks: {
            "16425389039f659f32-0": {
              type: "heading",
              settings: {
                heading: "High-Performance & Elegant Design",
                align: "left",
                content_color: "var(--py-color-light)",
                weight: "",
                size: "50px",
                padding: "",
                margin: "",
                width: "",
                height: "",
                c_css: "max-width:800px;\nmargin:auto;",
                m_align: "left",
                content_color_m: "var(--py-color-light)",
                m_weight: "",
                m_size: "",
                m_padding: "",
                m_margin: "",
                m_width: "",
                m_height: "",
                m_c_css: "font-size:26px",
              },
            },
            "16425389039f659f32-2": {
              type: "buttons",
              settings: {
                button_label_1: "Shop the MW08 Sport",
                button_link_1: "shopify://collections/all",
                view_btn_size: "large",
                content_color_view_btn: "dark",
                content_bg_color_view_btn: "light",
                content_color_view_btn_hover: "light",
                content_bg_color_view_btn_hover: "dark",
                c_css: "border-width:0px;",
              },
            },
          },
          block_order: ["16425389039f659f32-0", "16425389039f659f32-2"],
        },
      },
      {
        "164253890362d227ae": {
          type: "image-banner",
          settings: {
            image: "/6306f8e7db2cbec8c440f780/image-banner-v2-desktop.webp",
            show_lazy: true,
            image_2: "/6306f8e7db2cbec8c440f780/image-banner-v2-mobile.webp",
            url: "shopify://collections/all",
            show_override: true,
            content_bg_color: "var(--py-bg-color-dark)",
            ov_bg_image: "",
            ov_opacity: "0.4",
            pv: "center",
            ph: "center",
            align: "center",
            padding: "",
            margin: "",
            width: "",
            height: "",
            c_css: "",
            m_pv: "center",
            m_ph: "center",
            m_align: "center",
            m_padding: "",
            m_margin: "",
            m_width: "",
            m_height: "",
            m_c_css: "",
            enable_anim: true,
            anim: "zoom-out",
          },
          blocks: {
            "16425389039f659f32-0": {
              type: "heading",
              settings: {
                heading: "Summer style",
                align: "center",
                content_color: "var(--py-color-light)",
                weight: "",
                size: "50px",
                padding: "",
                margin: "",
                width: "",
                height: "",
                c_css: "max-width:800px;\nmargin:auto;",
                m_align: "center",
                content_color_m: "var(--py-color-light)",
                m_weight: "",
                m_size: "",
                m_padding: "",
                m_margin: "",
                m_width: "",
                m_height: "",
                m_c_css: "font-size:26px",
              },
            },
            "16425389039f659f32-2": {
              type: "buttons",
              settings: {
                button_label_1: "SHOP TOPS",
                button_link_1: "shopify://collections/all",
                view_btn_size: "large",
                content_color_view_btn: "dark",
                content_bg_color_view_btn: "light",
                content_color_view_btn_hover: "light",
                content_bg_color_view_btn_hover: "dark",
                c_css: "border-width:0px;",
              },
            },
          },
          block_order: ["16425389039f659f32-0", "16425389039f659f32-2"],
        },
      },
    ],
    "632a6f7db34039b04f77d3b1": [
      {
        "1652851716a9bcae46": {
          type: "image-with-text",
          blocks: {
            "1652851716950d2423-0": {
              type: "heading",
              settings: {
                heading: "Meet Your Match",
                fs: "fs-xl",
                title_font: "h1",
              },
            },
            "1652851716950d2423-1": {
              type: "text",
              settings: {
                text: "<p>Your coziest layer, your easiest outfit—matching sets are here.</p>",
                fs: "fs-s",
                text_y_mg: "mg-y-xl",
              },
            },
            "1652851716950d2423-2": {
              type: "button",
              settings: {
                button_label: "Shop Men's New Arrivals",
                button_link: "shopify://collections/base-brand",
                view_btn_style: "text_link",
                view_btn_size: "medium",
                py_section_color_view_btn: "light",
                py_section_color_view_btn_hover: "light",
              },
            },
            "9c546d82-d837-486c-abad-ce5929b49554": {
              type: "button",
              settings: {
                button_label: "Shop Women's New Arrivals",
                button_link: "shopify://collections",
                view_btn_style: "text_link",
                view_btn_size: "medium",
                py_section_color_view_btn: "light",
                py_section_color_view_btn_hover: "light",
              },
            },
          },
          block_order: [
            "1652851716950d2423-0",
            "1652851716950d2423-1",
            "1652851716950d2423-2",
            "9c546d82-d837-486c-abad-ce5929b49554",
          ],
          settings: {
            image: "/632a6f7db34039b04f77d3b1/image-with-text-1.webp",
            section_height: "auto",
            section_height_m: "400px",
            layout: "image_first",
            img_style: "normal",
            align: "center",
            section_bg_color: "var(--py-bg-color-light)",
            py_section_color: "var(--py-color-dark)",
            section_width: "full",
            section_y_mg: "mg-y-n",
          },
        },
      },
      {
        "1652851716a9bcae46": {
          type: "image-with-text",
          blocks: {
            "1652851716950d2423-0": {
              type: "heading",
              settings: {
                heading: "Meet Your Match",
                fs: "fs-xl",
                title_font: "h1",
              },
            },
            "1652851716950d2423-1": {
              type: "text",
              settings: {
                text: "<p>Your coziest layer, your easiest outfit—matching sets are here.</p>",
                fs: "fs-s",
                text_y_mg: "mg-y-xl",
              },
            },
            "1652851716950d2423-2": {
              type: "button",
              settings: {
                button_label: "Shop Men's New Arrivals",
                button_link: "shopify://collections/base-brand",
                view_btn_style: "text_link",
                view_btn_size: "medium",
                py_section_color_view_btn: "light",
                py_section_color_view_btn_hover: "light",
              },
            },
            "9c546d82-d837-486c-abad-ce5929b49554": {
              type: "button",
              settings: {
                button_label: "Shop Women's New Arrivals",
                button_link: "shopify://collections",
                view_btn_style: "text_link",
                view_btn_size: "medium",
                py_section_color_view_btn: "light",
                py_section_color_view_btn_hover: "light",
              },
            },
          },
          block_order: [
            "1652851716950d2423-0",
            "1652851716950d2423-1",
            "1652851716950d2423-2",
            "9c546d82-d837-486c-abad-ce5929b49554",
          ],
          settings: {
            image: "/632a6f7db34039b04f77d3b1/image-with-text.webp",
            section_height: "auto",
            section_height_m: "400px",
            layout: "image_first",
            img_style: "normal",
            align: "center",
            section_bg_color: "var(--py-bg-color-light)",
            py_section_color: "var(--py-color-dark)",
            section_width: "full",
            section_y_mg: "mg-y-n",
          },
        },
      },
    ],
    "62fe8c9ba58276071f183cb8": [
      {
        "164253890362d227ae": {
          type: "image-banner",
          blocks: {
            "16425389039f659f32-0": {
              type: "heading",
              settings: {
                heading: "Industrial design meets fashion.",
                align: "center",
                content_color: "var(--py-color-light)",
                weight: "",
                size: "60px",
                padding: "",
                margin: "",
                width: "",
                height: "",
                c_css: "max-width:600px;\nmargin:auto;",
                m_align: "center",
                content_color_m: "var(--py-color-light)",
                m_weight: "",
                m_size: "40px",
                m_padding: "",
                m_margin: "",
                m_width: "",
                m_height: "",
                m_c_css: "",
              },
            },
            "16425389039f659f32-2": {
              type: "buttons",
              settings: {
                button_label_1: "Shop Now",
                button_link_1: "shopify://collections/all",
                view_btn_size: "large",
                content_color_view_btn: "light",
                content_bg_color_view_btn: "dark",
                content_color_view_btn_hover: "dark",
                content_bg_color_view_btn_hover: "light",
                c_css: "border-width:0px;",
              },
            },
          },
          block_order: ["16425389039f659f32-0", "16425389039f659f32-2"],
          settings: {
            section_height: "auto",
            image: "/62fe8c9ba58276071f183cb8/image-banner-img-left-1.webp",
            image_desk_2:
              "/62fe8c9ba58276071f183cb8/image-banner-img-right-1.webp",
            show_lazy: true,
            url: "shopify://collections/all",
            show_override: true,
            content_bg_color: "var(--py-bg-color-dark)",
            ov_opacity: "0.2",
            pv: "center",
            ph: "center",
            align: "center",
            padding: "",
            margin: "",
            width: "",
            height: "",
            c_css: "",
            m_pv: "center",
            m_ph: "center",
            m_align: "center",
            m_padding: "",
            m_margin: "",
            m_width: "",
            m_height: "",
            m_c_css: "",
            enable_anim: true,
            anim: "zoom-out",
          },
        },
      },
      {
        "164253890362d227ae": {
          type: "image-banner",
          blocks: {
            "16425389039f659f32-0": {
              type: "heading",
              settings: {
                heading: "Summer Sale",
                align: "center",
                content_color: "var(--py-color-light)",
                weight: "",
                size: "60px",
                padding: "",
                margin: "",
                width: "",
                height: "",
                c_css: "max-width:600px;\nmargin:auto;",
                m_align: "center",
                content_color_m: "var(--py-color-light)",
                m_weight: "",
                m_size: "40px",
                m_padding: "",
                m_margin: "",
                m_width: "",
                m_height: "",
                m_c_css: "",
              },
            },
            "16425389039f659f32-2": {
              type: "buttons",
              settings: {
                button_label_1: "Our Collections",
                button_link_1: "shopify://collections/all",
                view_btn_size: "large",
                content_color_view_btn: "light",
                content_bg_color_view_btn: "dark",
                content_color_view_btn_hover: "dark",
                content_bg_color_view_btn_hover: "light",
                c_css: "border-width:0px;",
              },
            },
          },
          block_order: ["16425389039f659f32-0", "16425389039f659f32-2"],
          settings: {
            section_height: "auto",
            image: "/62fe8c9ba58276071f183cb8/image-banner-img-left-2.webp",
            image_desk_2:
              "/62fe8c9ba58276071f183cb8/image-banner-img-right-2.jpg",
            show_lazy: true,
            url: "shopify://collections/all",
            show_override: true,
            content_bg_color: "var(--py-bg-color-dark)",
            ov_opacity: "0.2",
            pv: "center",
            ph: "center",
            align: "center",
            padding: "",
            margin: "",
            width: "",
            height: "",
            c_css: "",
            m_pv: "center",
            m_ph: "center",
            m_align: "center",
            m_padding: "",
            m_margin: "",
            m_width: "",
            m_height: "",
            m_c_css: "",
            enable_anim: true,
            anim: "zoom-out",
          },
        },
      },
    ],
  };

  let fontsCount = 0;

  // GLOBAL VARIABLES
  let focuseValue = "";
  let theme = {
    settings_data: {
      current: {
        sections: {},
      },
    },
    templates: {},
  };
  let saveButton = null;
  let downloadButton = null;
  let loading = null;
  let smallLoading = null;
  let alertCount = null;
  let alertMessage = null;
  let themeName = "ThemeMake";
  let textColors = {
    "dark": null,
    "middle_dark": null,
    "average": null,
    "middle_light": null,
    "light": null
  };
  let bgColors = {
    "dark": null,
    "middle_dark": null,
    "average": null,
    "middle_light": null,
    "light": null
  };

  let isAiLogo = null;
  let isAiColor = null;
  let isAiImage = null;
  let aiDalleApiKey = null; 
  let aiStableApiKey = null; 

  let busNamePromp = null;
  let prodTypePromp = null;
  let colorDescPromp = null;

  let textPrompt = null;
  let logoPrompt = null;
  let imagePrompt = null;
  let colorPrompt = null;
  let imageModel = "dalle";

  const clearTheme = () => {
    theme = {
      settings_data: {
        current: {
          sections: {},
        },
      },
      templates: {},
    };
  };

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
  const getContrastName = (hexcolor) => {
    if (!hexcolor) return;
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 186 ? "dark" : "light";
  };

  const getContrastHex = (hexcolor) => {
    if (!hexcolor) return;
    hexcolor = hexcolor.replace("#", "");
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 186 ? "#000000" : "#FFFFFF";
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
    return true;
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
  const save = async (e, action_type=false) => {
    let form = document.querySelector("form.py__settings-form");
    let url = form.getAttribute("action");

    if (!form || !url) return;

    loading?.classList.add("py__animate");

    if(action_type) theme.action_type = "addnew";

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
      if(dataParse?.message === "added") location.href = "/";
      saveButton?.setAttribute("aria-disabled", "true");
      downloadButton?.setAttribute("aria-disabled", "false");
      await saveSettingsValues();
    }
    loading?.classList.remove("py__animate");
  };

  // SAVE FIGMA DATA
  let figmaContent = [];
  const saveFigma = async (event) => {
    if (!event) return;
    let userID = event.target.getAttribute("data-user-id");
    let themeID = event.target.getAttribute("data-theme-id");
    if (!userID || !themeID) return;
    loading?.classList.add("py__animate", "py__notopacity");
    loading?.insertAdjacentHTML(
      "beforeend",
      '<span class="py__save-figma-message">Please wait 3..5 minuts. We converting your site to figma design...</span>'
    );

    let selectPages = document.querySelector(".py__preview-pages-select");
    let selectedPageUrl = selectPages.options[selectPages.selectedIndex].getAttribute("data-href");
    let brandUrl = location?.pathname + "?settings=global-styles";
    await changeViewPage(false, brandUrl, false, false);
    await timeout(2500);
    await savePageResForFigma("Brand");
    let url = "/figma/" + userID + "/" + themeID + "/brand";
    let res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(figmaContent),
    });
    let data = await res.text();
    if (!data)
      loading
        ?.querySelector(".py__save-figma-message")
        ?.innerHTML("WE HAVE ERROR! Please Try Again Few Minuts Late!");
    figmaContent = [];
    let selectPagesOptions = selectPages.querySelectorAll("option");
    for (let option of selectPagesOptions) {
      let href = option.getAttribute("data-href");
      let pageName = option.textContent
        .toLowerCase()
        .trim()
        .replaceAll(" ", "-");
      await changeViewPage(false, href, false, false);
      await timeout(2500);
      await savePageResForFigma(option.textContent.trim());
      let url = "/figma/" + userID + "/" + themeID + "/" + pageName;
      let res = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(figmaContent),
      });
      let data = await res.text();
      if (!data)
        loading
          ?.querySelector(".py__save-figma-message")
          ?.innerHTML("WE HAVE ERROR! Please Try Again Few Minuts Late!");
      figmaContent = [];
    }
    changeViewPage(false, selectedPageUrl, false, false);
    loading?.classList.remove("py__animate", "py__notopacity");
    loading?.querySelector(".py__save-figma-message")?.remove();
  };

  const timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const savePageResForFigma = async (pagename) => {
    let res = await saveDesktopForFigma(pagename);
    return res;
  };

  const saveDesktopForFigma = async (pagename) => {
    let iframe = document.querySelector(".py__view-iframe");
    let iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    if (!iframeDocument) return;
    let data = await mapDOM(
      iframeDocument.getElementsByTagName("body")[0],
      false,
      pagename,
      "Desktop"
    );
    figmaContent.push(data);
    if(pagename === "Brand") return;
    let tablet = document.querySelector('.py__button-view[data-type="tablet"]');
    tablet.click();
    let res = await saveTabletForFigma(pagename);
    return res;
  };

  const saveTabletForFigma = async (pagename) => {
    let iframe = document.querySelector(".py__view-iframe");
    let iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;
    if (!iframeDocument) return;
    let data = await mapDOM(
      iframeDocument.getElementsByTagName("body")[0],
      false,
      pagename,
      "Tablet"
    );
    figmaContent.push(data);
    let mobile = document.querySelector('.py__button-view[data-type="mobile"]');
    mobile.click();
    let res = await saveMobileForFigma(pagename);
    return res;
  };

  const saveMobileForFigma = async (pagename) => {
    let iframe = document.querySelector(".py__view-iframe");
    let iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;
    if (!iframeDocument) return;
    let data = await mapDOM(
      iframeDocument.getElementsByTagName("body")[0],
      false,
      pagename,
      "Mobile"
    );
    figmaContent.push(data);
    let desktop = document.querySelector(
      '.py__button-view[data-type="desktop"]'
    );
    desktop.click();
    return true;
  };

  // FIGMA HTML TO JSON
  let components = {};
  let figmaItemIndex = 1;
  const mapDOM = async (element, json, pagename, pageSuffix) => {
    let figmaData = [];

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
      let o = window.getComputedStyle(element);
      s.backgroundColor = o["backgroundColor"];
      s.color = o["color"];
      s.width = o["width"];
      s.height = o["height"];
      s.fontSize = o["fontSize"];
      s.fontFamily = o["fontFamily"];
      s.borderWidth = o["borderWidth"];
      s.borderColor = o["borderColor"];
      s.textTransform = o["textTransform"];
      s.transform = o["transform"] !== "none"
          ? await convertToAngle(o["transform"])
          : "none";
      s.borderStyle = o["borderStyle"];
      s.borderBottomLeftRadius = o["borderBottomLeftRadius"];
      s.borderBottomRightRadius = o["borderBottomRightRadius"];
      s.borderTopLeftRadius = o["borderTopLeftRadius"];
      s.borderTopRightRadius = o["borderTopRightRadius"];
      s.display = o["display"];
      s.direction = o["flexDirection"];
      s.justifyContent = o["justifyContent"];
      s.gap = o["gap"];
      s.alignItems = o["alignItems"];
      s.textAlign = o["textAlign"];
      s.textDecoration = o["textDecorationLine"];
      s.overflow = o["overflow"];
      let rect = element.getBoundingClientRect();
      s.x = rect.left;
      s.y = rect.top;
      return s;
    };

    const checkElementHide = async (element) => {
      let css = getComputedStyle(element);
      let display = css.getPropertyValue("display");
      let visibility = css.getPropertyValue("visibility");
      let height = css.getPropertyValue("height");
      return display === "none" || visibility === "hidden" || parseInt(height) === 0 ? true : false;
    };

    const getAttributes = async (element, attributes) => {
      let attrs = {};
      for (var i = 0; i < attributes.length; i++) {
        attributes[i].nodeName === "src"
          ? (attrs[attributes[i].nodeName] = element.src)
          : (attrs[attributes[i].nodeName] = attributes[i].nodeValue);
      }
      return attrs;
    };

    //Recursively loop through DOM elements and assign properties to object
    const treeHTML = async (element, isChild = false) => {
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
        let figmaDataItem = {};
        figmaDataItem.css = await dumpCSSText(element);
        if (element?.attributes?.length)
        figmaDataItem.attributes = await getAttributes(
          element,
          element.attributes
        );
        let isComponent = (figmaDataItem?.attributes && figmaDataItem?.attributes['data-component']) ? figmaDataItem?.attributes['data-component'] + " " + pageSuffix : null;
        figmaDataItem.title = (element.nodeName === "BODY")
          ? pagename + " " + pageSuffix
          : (isComponent) 
          ? isComponent
          : (figmaDataItem?.attributes?.class || figmaDataItem?.attributes?.id)
          ? (figmaDataItem?.attributes?.class)
          ? figmaDataItem?.attributes.class
                ?.split(" ")[0]
                .replaceAll("_", " ")
                .replaceAll("-", " ")
                .replaceAll("__", " ") +
              " " +
              figmaItemIndex
            : figmaDataItem?.attributes?.id
                .replaceAll("_", " ")
                .replaceAll("-", " ")
                .replaceAll("__", " ") +
              " " +
              figmaItemIndex
          : "no name " + figmaItemIndex;
          figmaItemIndex++;
      // if(element.nodeName === "BODY" || element.nodeName === "BUTTON" || element.nodeName === "INPUT" || element.nodeName === "SECTION" || element.nodeName === "IMG" || element.nodeName === "svg" || figmaDataItem.css.display === "flex" || figmaDataItem.css.backgroundColor !== "rgba(0, 0, 0, 0)"){
        figmaDataItem.type =
          element.nodeName === "svg" ||
          element.nodeName === "IMG" ||
          element.nodeName === "BODY"
            ? element.nodeName
            : "FRAME";
          if (isChild) figmaDataItem.parent = isChild;
          if (element.nodeName === "svg")  figmaDataItem.svg = element.outerHTML;
          figmaData.push(figmaDataItem);
          if(isComponent) figmaDataItem.attributes['data-component'] = isComponent;
          if(element.nodeName === "svg") return;
          if(isComponent && components[isComponent]) return;
          if(isComponent) components[isComponent] = true;
      // }
      if (element?.childNodes?.length) {
        for (let i = 0; i < element?.childNodes?.length; i++) {
          let figmaChildItem = element?.childNodes[i];
          if (figmaChildItem.nodeType === 3) {
            if (figmaChildItem.nodeValue.replace(/[\r\n]/gm, "").trim() !== "")
            return figmaData.push({
              type: "TEXT",
              text: figmaChildItem.nodeValue.trim(),
              css: figmaDataItem.css,
              attrinutes: figmaChildItem?.attributes,
              parent: figmaDataItem.title,
              tag: element.nodeName
            });
          } else {
            await treeHTML(figmaChildItem, figmaDataItem.title);
          }
        }
      }
    };
    await treeHTML(element);

    return json ? JSON.stringify(figmaData) : figmaData;
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
  const viewIframe = async (showLoading = false) => {
    let iframes = document.querySelectorAll("iframe.py__view-iframe");
    if (!iframes?.length && showLoading)
      return loading?.classList.remove("py__animate");
    let url = iframes[0].getAttribute("data-src")
      ? iframes[0].getAttribute("data-src")
      : iframes[0].getAttribute("src");
    if (!url && showLoading) return loading?.classList.remove("py__animate");
    let res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(theme),
    });
    let data = await res.text();
    if (!data && showLoading) return loading?.classList.remove("py__animate");
    let parser = new DOMParser();
    let html = parser.parseFromString(data, "text/html");
    for (let i = 0; i < iframes.length; i++) {
      let iframeItem = iframes[i];
      let ifrm = iframeItem.contentDocument || iframeItem.contentWindow.document;
      (html && ifrm)
      ? (ifrm.querySelector("body").innerHTML = html.querySelector("body").innerHTML)
      : null;
    }
    if (showLoading) loading?.classList.remove("py__animate");
    return true;
  };

  // Iframe Previews Function (Mobile, Desktop, Tablet)
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
    changeUrl = true,
    showLoading = false
  ) => {

    if (showLoading) loading?.classList.add("py__animate");
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
        let newUrl = (url && url.includes("users"))
            ? "/view" + url
            : (url.includes('remix-editor')) 
            ? url.replace("editor", "view") 
            : url.replace("themes", "view").replace("remix", "view");
        iframe.setAttribute("data-src", newUrl);
      }
    }
    await saveSettingsValues();
    await viewIframe(showLoading);
  };

  // Get Global settings or Section settings dynamic function
  const getSettingsLists = async (event, newurl = false) => {
    if (!event && !newurl) return;

    loading?.classList.add("py__animate");
    let el = event.target;
    let url = null;
    if (newurl) {
      url = newurl;
    } else {
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
    }
    if (!url) return;

    window.history.replaceState({}, "", url);
    let urlSearch = new URLSearchParams(url);
    let sectionName = urlSearch.get("section");
    let iframes = document.querySelectorAll(".py__view-iframe");

    if (!newurl) el.classList.add("active");
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
    let oldRandomSettings = document.querySelector(".py__make-random-settings");
    let newRandomSettings = html.querySelector(".py__make-random-settings");
    let oldRandomPages = document.querySelector(".py__preview-select");
    let newRandomPages = html.querySelector(".py__preview-select");
    oldSettingsWrap && newSettingsWrap
      ? (oldSettingsWrap.innerHTML = newSettingsWrap.innerHTML)
      : null;
    oldSidebar && newSidebar
      ? (oldSidebar.innerHTML = newSidebar.innerHTML)
      : null;
    oldRandomSettings && newRandomSettings
      ? (oldRandomSettings.innerHTML = newRandomSettings.innerHTML)
      : null;
    oldRandomPages && newRandomPages
      ? (oldRandomPages.innerHTML = newRandomPages.innerHTML)
      : null;
    if (sectionName) {
      let urlParams = new URL(location.href);
      let iframeSearchParams = new URLSearchParams(urlParams.search);
      iframeSearchParams.set("section", sectionName);
      let iframeUrl = (urlParams.pathname.indexOf("/users/") !== -1)
          ? "/view" + urlParams.pathname + "?" + iframeSearchParams.toString()
          : (urlParams.pathname.includes('remix-editor')) 
          ? urlParams.pathname.replace("remix-editor", "remix-view") + "?" + iframeSearchParams.toString()
          : urlParams.pathname
              .replace("themes", "view")
              .replace("remix", "view") +
            "?" +
            iframeSearchParams.toString();
      iframes?.length &&
        iframes?.forEach((iframe) => {
          iframe.setAttribute("data-src", iframeUrl);
        });
      await viewIframe();
    } else {
      let urlParams = new URL(location.href);
      let iframeSearchParams = new URLSearchParams(urlParams.search);
      let iframeUrl = (urlParams.pathname.indexOf("/users/") !== -1)
          ? "/view" + urlParams.pathname + "?" + iframeSearchParams.toString()
          : (urlParams.pathname.includes('remix-editor')) 
          ? urlParams.pathname.replace("remix-editor", "remix-view") + "?" + iframeSearchParams.toString()
          : urlParams.pathname
              .replace("themes", "view")
              .replace("remix", "view") +
            "?" +
            iframeSearchParams.toString();
      iframes?.length &&
        iframes?.forEach((iframe) => {
          iframe.setAttribute("data-src", iframeUrl);
        });
      await viewIframe();
    }
    loading?.classList.remove("py__animate");
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
  let currentThemeKey = 0;
  let allThemesID = [
    "6306f8e7db2cbec8c440f780",
    "632a6f7db34039b04f77d3b1",
    "62fe8c9ba58276071f183cb8"
  ];
  
    const HSLToRGB = (h, s, l) => {
      s /= 100;
      l /= 100;
      const k = (n) => (n + h / 30) % 12;
      const a = s * Math.min(l, 1 - l);
      const f = (n) =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
      return [
        Math.floor(255 * f(0)),
        Math.floor(255 * f(8)),
        Math.floor(255 * f(4)),
      ];
    };

    const random = (max, min) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const RGBToHSL = ([r, g, b]) => {
      r /= 255;
      g /= 255;
      b /= 255;
      const l = Math.max(r, g, b);
      const s = l - Math.min(r, g, b);
      const h = s
        ? l === r
          ? (g - b) / s
          : l === g
          ? 2 + (b - r) / s
          : 4 + (r - g) / s
        : 0;
      return [
        60 * h < 0 ? 60 * h + 360 : 60 * h,
        100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
        (100 * (2 * l - s)) / 2,
      ];
    };

    const generateRandomColors = async () => {
      let generateBackgroundColors = () => {
      let h = random(360, 0);
      let s = random(100, 50);
      let l = 80;

      let colors = [];
      colors.push(HSLToRGB(h, s, 95));
      colors.push(HSLToRGB(h, s, 85));
      colors.push(HSLToRGB(h, s, 55));
      colors.push(HSLToRGB(h, s, 35));
      colors.push(HSLToRGB(h, s, 25));
      return colors.reverse();
    };

    let generateTextColors = (backgroundColor) => {
      let hsl = RGBToHSL(backgroundColor);
      let h = hsl[0];
      let s = random(20, 0);

      let colors = [];
      colors.push(HSLToRGB(h, s, 2));
      colors.push(HSLToRGB(h, s, 25));
      colors.push(HSLToRGB(h, s, 55));
      colors.push(HSLToRGB(h, s, 75));
      colors.push(HSLToRGB(h, s, 98));
      return colors;
    };

    // let inputFileds = document.querySelectorAll('[type="color"]');
    let getBgColors = null;
    let getTextColors = null;

    if(isAiColor){
        let bgColorsFileds = document.querySelectorAll('.py__ai-bg-color');
        let colorsFileds = document.querySelectorAll('.py__ai-color');
        alertMessage.textContent = `Generating New Colors ${bgColorsFileds.length + colorsFileds.length}`;
        let colorPropmt = `using a json format show me 5 color ${colorDescPromp || "difference"} palette as hex codes called backgrounds. for each background hex code assign a text color hex code that has a 7:1 WCAG contrast ratio against the backgrounds.`
        let getColorsParse = await createTextAi(colorPropmt);
        let getColors = JSON.parse(getColorsParse);
        let getBgColors = [];
        let getTextColors = [];
        if(getColors?.backgrounds){
          for(let i=0; i<getColors.backgrounds.length; i++){
            let aiColorItem = getColors.backgrounds[i];
            getBgColors.push(aiColorItem.backgroundHex || aiColorItem.background);
            getTextColors.push(aiColorItem.textHex || aiColorItem.text);
          }
        }
        getBgColors.reverse();

        for(let i=0; i<5; i++){
          let bgColorFiled = bgColorsFileds[i]; 
          let colorFiled = colorsFileds[i];
          bgColorFiled.value = getBgColors[i];
          colorFiled.value = getTextColors[i];
          let wrapBgColor = bgColorFiled.closest('.py__label-for-color');
          let wrapColor = colorFiled.closest('.py__label-for-color');
          wrapBgColor.style.backgroundColor = getBgColors[i];
          wrapColor.style.backgroundColor = getTextColors[i];
          alertCount.textContent = (i + 1) * 2;
        }
        await saveSettingsValues();
        await viewIframe(true);
    } else {
      getBgColors = generateBackgroundColors();
      getTextColors = generateTextColors(getBgColors[2]);
    }
    // alertMessage.textContent = `Generating New Colors ${getBgColors.length + getTextColors.length}`;
    // let index = 0;

    // for (let i = 0; i < inputFileds.length; i++) {
    //   let filed = inputFileds[i];
    //   let filedName = filed.getAttribute("name");
    //   if (filedName.includes("_bg")) {
    //     let bgColor = await rgbToHex(getBgColors[index]);
    //     let textColor = await rgbToHex(getTextColors[index]);
    //     bgColors[filedName.replace('py_bg_color_', '')] = bgColor;
    //     let closestWrap = filed.closest(".component-is-color");
    //     let isColorLabel = closestWrap.querySelector(".py__label-for-color");
    //     isColorLabel.style.backgroundColor = bgColor;
    //     filed.setAttribute("value", bgColor);
    //     index++;
    //     let filedNameText = filedName.replace("_bg", "");
    //     let textInputFiled = document.querySelector(
    //       `[name="${filedNameText}"]`
    //     );
    //     let filedTextName = textInputFiled.getAttribute("name");
    //     if (textInputFiled) {
    //       textColors[filedTextName.replace('py_color_', '')] = textColor;
    //       let textClosestWrap = textInputFiled.closest(".component-is-color");
    //       let textIsColorLabel = textClosestWrap?.querySelector(
    //         ".py__label-for-color"
    //       );
    //       if (textIsColorLabel)
    //         textIsColorLabel.style.backgroundColor = textColor;
    //       textInputFiled.setAttribute("value", textColor);
    //     }
    //   }
    // }
  };

  const setColorToSettings = async () => {
    let inputFileds = document.querySelectorAll("[name]");

    let isSection = {
      active: true,
      color: null
    };
    let isCard = {
      active: true,
      color: null
    };
    let isButton = {
      active: true,
      color: null
    };

    if (!inputFileds.length) return loading?.classList.remove("py__animate");

    for (let i = 0; i < inputFileds.length; i++) {
      let filed = inputFileds[i];
      let filedType = filed.getAttribute("type");
      let filedName = filed.getAttribute("name");
      if (filedType === "select") {
        let options = filed.getElementsByTagName("option");
        let sectionContainer = filed.closest(".py__closest");
        let fontObj = fonts[fontsCount];
        if (filedName?.includes("font")) {
          let selectedOption = filedName?.includes("body")
            ? filed.querySelector(`option[value="${fontObj.body}"`)?.index
            : filed.querySelector(`option[value="${fontObj.heading}"`)?.index;
          filed.selectedIndex = selectedOption;
        } else if (filedName?.includes("_bg")) {
          let getBgColorHexCode = null;
          if(isSection.active && filedName.includes('section') && !filedName.includes('btn') || isSection.active && filedName.includes('page') && !filedName.includes('btn')){ 
            let optionIndex = Math.floor(Math.random() * options.length);
            filed.selectedIndex = optionIndex;
            let bgCName = options[optionIndex]?.textContent?.toLowerCase()?.replace(" ", "_");
            getBgColorHexCode = bgColors[bgCName];
            isSection.active = false;
            isSection.color = bgCName;
          } else if(isCard.active && filedName.includes('card') && !filedName.includes('btn')){ 
            let optionIndex = Math.floor(Math.random() * options.length);
            filed.selectedIndex = optionIndex;
            let bgCName = options[optionIndex]?.textContent?.toLowerCase()?.replace(" ", "_");
            getBgColorHexCode = bgColors[bgCName];
            isCard.active = false;
            isCard.color = bgCName;
          } else if(isButton.active && filedName.includes('btn')){ 
            let optionIndex = Math.floor(Math.random() * options.length);
            filed.selectedIndex = optionIndex;
            let bgCName = options[optionIndex]?.textContent?.toLowerCase()?.replace(" ", "_");
            getBgColorHexCode = bgColors[bgCName];
            isButton.active = false;
            isButton.color = bgCName;
          } else if(!filedName.includes('section') && !filedName.includes('page')  &&  !filedName.includes('btn') && !filedName.includes('card')) {
            let optionIndex = Math.floor(Math.random() * options.length);
            filed.selectedIndex = optionIndex;
            let bgCName = options[optionIndex]?.textContent?.toLowerCase()?.replace(" ", "_");
            getBgColorHexCode = bgColors[bgCName];
          }
          if(!isSection.active && filedName.includes('section') && !filedName.includes('btn') || !isSection.active && filedName.includes('page') && !filedName.includes('btn')){ 
            filed.selectedIndex = [...options].findIndex((option) =>  option?.textContent?.toLowerCase()?.replaceAll(' ', '_') === isSection.color);
            getBgColorHexCode = bgColors[options[filed.selectedIndex]?.textContent?.toLowerCase()?.replace(" ", "_")];
          } else if(!isCard.active && filedName.includes('card') && !filedName.includes('btn')){ 
            filed.selectedIndex = [...options].findIndex((option) =>  option?.textContent?.toLowerCase()?.replaceAll(' ', '_') === isCard.color);
            getBgColorHexCode = bgColors[options[filed.selectedIndex]?.textContent?.toLowerCase()?.replace(" ", "_")];
          } else if(!isButton.active && filedName.includes('btn')){ 
            filed.selectedIndex = [...options].findIndex((option) =>  option?.textContent?.toLowerCase()?.replaceAll(' ', '_') === isButton.color);
            getBgColorHexCode = bgColors[options[filed.selectedIndex]?.textContent?.toLowerCase()?.replace(" ", "_")];
          } 
          let textFiledName = filedName?.replace("_bg", "");
          let textColorInput = sectionContainer.querySelectorAll(`[name*="${textFiledName}"]`);
          if(textColorInput?.length) {
            for (let i = 0; i < textColorInput?.length; i++) {
              let textItemColor = textColorInput[i];
              textItemColor.selectedIndex = [...textItemColor.options].findIndex((option) =>  option?.textContent?.toLowerCase()?.replaceAll(' ', '_') === (getBgColorHexCode ? getContrastName(getBgColorHexCode) : 'dark' ));
              // textItemColor.selectedIndex = [...textItemColor.options].findIndex((option) =>  option?.value === filed.value);
            }
          }
        } else if(!filedName?.includes("color")) {
          let optionIndex = Math.floor(Math.random() * options.length);
          filed.selectedIndex = optionIndex;
        }
      }
    }
  };

  const createImageAi = async (model, prompt) => {
    console.log(model, "MODEL");
    let req = await fetch('/openai', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({dalle_api_key: aiDalleApiKey, stable_api_key: aiStableApiKey, model: model, image: prompt}),
    });
    let res = await req.text();
    let parseRes = JSON.parse(res);
    return parseRes.image;
  };

  // const createImageAiStabled = async (prompt) => {
  //   let req = await fetch('https://stablediffusionapi.com/api/v3/text2img', {
  //     method: "POST",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       "key": "2ryv9Kf1RulA46aG70jgGUH625bYhilWv8eIn0kDc1xYvXXcdT0Mb3wI8v0L",
  //       "prompt": prompt,
  //       "negative_prompt": "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs)), anime",
  //       "width": "512",
  //       "height": "512",
  //       "samples": "1",
  //       "num_inference_steps": "20",
  //       "seed": null,
  //       "guidance_scale": 7.5,
  //       "webhook": null,
  //       "track_id": null
  //     })
  //   });
  //   let res = await req.json();
  //   console.log(res, "CHECK DAV JAN");
  //   return res.output;
  // };

  const createTextAi = async (propmt) => {
    let req = await fetch('/openai', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({dalle_api_key: aiDalleApiKey, message: propmt}),
    });
    let res = await req.text();
    let parseRes = JSON.parse(res);
    return parseRes.result;
  };

  // const bussinesName = async (event) => {
  //   if(!event) return;
  //   let aiPopup = document.querySelector('.py__remix-popup');
  //   aiPopup?.classList.remove('active');

  //   try {

  //     // AI GET NEW TEXTS FOR THEME
  //     let allTextFileds = document.querySelectorAll('.py__ai-text');
  //     alertMessage.textContent = `Generating New Texts ${allTextFileds.length}`;
  //     smallLoading.classList.add('active');
  //     let countText = allTextFileds.length / 4;
  //     let textIndex1 = 0;
  //     let textIndex2 = 0;
  //     let alertCountIndex = 1;
  //     for(let j=1; j<=countText; j++){
  //       let textLenght = j * 4;  
  //       let allText = "";
  //       for(textIndex1; textIndex1<textLenght; textIndex1++){
  //         let textFiled = allTextFileds[textIndex1];
  //         if(textFiled?.value?.trim() !== ""){
  //           allText += textFiled.value + " | "; 
  //         }
  //       }
  //       if(allText.trim() !== ""){
  //         let textPropmt = `create a json object called items and each item should have number id and a value |. rewrite each value to sound more like a sales pitch and about ${prodType} "${allText.replaceAll('<p>', "").replaceAll('</p>', "")}"`;
  //         let getNewText = await createTextAi(textPropmt);
  //         let parseText = JSON.parse(getNewText);
  //         let aiTextI = 0;
  //         for(textIndex2; textIndex2<textLenght; textIndex2++){
  //           let textValue = (parseText.items[aiTextI]) ? parseText.items[aiTextI].value : parseText.items.value;
  //           let textFiled = allTextFileds[textIndex2];
  //           if(textFiled?.value?.trim() !== "" && textValue !== undefined){
  //             textFiled.value = textValue;
  //           }
  //           alertCount.textContent = alertCountIndex;
  //           alertCountIndex++;
  //           aiTextI++;
  //           await saveSettingsValues();
  //           await viewIframe(true);
  //         }
  //       }
  //     }

  //     // AI GET NEW COLORS FOR THEME
  //     if(isAiColor){
  //       let bgColorsFileds = document.querySelectorAll('.py__ai-bg-color');
  //       let colorsFileds = document.querySelectorAll('.py__ai-color');
  //       alertMessage.textContent = `Generating New Colors ${bgColorsFileds.length + colorsFileds.length}`;
  //       let colorPropmt = `using a json format show me 5 color ${colorDesc || "difference"} palette as hex codes called backgrounds. for each background hex code assign a text color hex code that has a 7:1 WCAG contrast ratio against the backgrounds.`
  //       let getColorsParse = await createTextAi(colorPropmt);
  //       let getColors = JSON.parse(getColorsParse);
  //       let getBgColors = [];
  //       let getTextColors = [];
  //       if(getColors?.backgrounds){
  //         for(let i=0; i<getColors.backgrounds.length; i++){
  //           let aiColorItem = getColors.backgrounds[i];
  //           getBgColors.push(aiColorItem.backgroundHex || aiColorItem.background);
  //           getTextColors.push(aiColorItem.textHex || aiColorItem.text);
  //         }
  //       }
  //       getBgColors.reverse();

  //       for(let i=0; i<5; i++){
  //         let bgColorFiled = bgColorsFileds[i]; 
  //         let colorFiled = colorsFileds[i];
  //         bgColorFiled.value = getBgColors[i];
  //         colorFiled.value = getTextColors[i];
  //         let wrapBgColor = bgColorFiled.closest('.py__label-for-color');
  //         let wrapColor = colorFiled.closest('.py__label-for-color');
  //         wrapBgColor.style.backgroundColor = getBgColors[i];
  //         wrapColor.style.backgroundColor = getTextColors[i];
  //         alertCount.textContent = (i + 1) * 2;
  //       }
  //       await saveSettingsValues();
  //       await viewIframe(true);
  //     }

  //     // AI CREATE NEW LOGO FROM BUSSINES NAME
  //     if(isAiLogo){
  //       alertMessage.textContent = `Generating New Logo`;
  //       alertCount.style.display = "none";
  //       let logoFiled = document.querySelector('.py__ai-logo');
  //       if(logoFiled){
  //         let logoPropmt = `make a logo mark for a business that sells ${prodType} called ${busName} in the style of rob janoff`;
  //         let getNewlogo = await createImageAi(logoPropmt.replace("[prodTypePromp]", prodTypePromp));
  //         logoFiled.value = getNewlogo;
  //         await saveSettingsValues();
  //         await viewIframe(true);
  //       }
  //     }
      
  //     // AI CREATE NEW IMAGES FOR THEME 
  //     if(isAiImage){
  //       let imagesFiled = document.querySelectorAll('.py__ai-image');
  //       alertMessage.textContent = `Generating New Images ${imagesFiled.length}`;
  //       alertCount.style.display = "flex";
  //       for(let i=0; i<imagesFiled.length; i++){
  //         let imageFiled = imagesFiled[i];
  //         let imageAlt = imageFiled.getAttribute('alt');
  //         let getNewImage = await createImageAi(null, prodType, imageAlt);
  //         imageFiled.value = getNewImage;
  //         alertCount.textContent = i;
  //         await saveSettingsValues();
  //         await viewIframe(true);
  //       };
  //     }

  //     return smallLoading?.classList.remove("active");
  //   } catch(err){
  //     await saveSettingsValues();
  //     await viewIframe(true);
  //     return smallLoading.querySelector('.message').textContent = err.result;
  //   }
  // };


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
                  ? getContrastHex(colorCode)
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
  
  const openAiApi = async (e) => {
    if(!e) return;
    e.preventDefault();
    let loading = document.querySelector('.loading-popup');
    loading?.classList.add('active');
    let form = e.target;
    let url = form.getAttribute('action');
    let message = form.querySelector('[name="openai-req"]');
    let imageMessage = form.querySelector('[name="image"]');
    let model = form.querySelector('[name="model"]');
    let openAiIframe = document.querySelector('.py__openai-res');
    let openAiCode = document.querySelector('.code-block');
    let openAiCodePre = openAiCode?.querySelector('pre');
    if(!message || !url || !model) return loading?.classList.remove('active');
    let messageValue = message.value;
    let imageMessageVal = imageMessage.value; 
    let modelType = model.value;

    let req = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messageValue,
        image: imageMessageVal,
        openaiModel: modelType,
      }),
    });

    let res = await req.text();
    let parseRes = JSON.parse(res);
    let iframeContent = openAiIframe.contentDocument || openAiIframe.contentWindow.document;
    iframeContent.querySelector("body").innerHTML = parseRes.result + '<img src="' + parseRes.image +  '"/>';
    openAiCodePre.textContent = parseRes.result;
    loading?.classList.remove('active');
    // let newOpenAiIframe = document.querySelector('.py__openai-res');
    // let newIframeContent = newOpenAiIframe.contentDocument || newOpenAiIframe.contentWindow.document;
    // let el = newIframeContent.querySelector(".bc-product-grid-variants");
    // console.log(el, window.getComputedStyle(el), "HELLO");

  };

  let getcolors = null;
  let getNewlogo = null;
  const nextStep = async (e) => {
    
    if(!e) return;
    
    let target = e.target;
    let index = target.getAttribute('data-index');
    let prevStepContent = document.querySelector('[data-id="' + (parseInt(index) - 1) + '"]');
    let nextStepContent = document.querySelector('[data-id="' + index + '"]');

    if(parseInt(index) === 2){
      let thisbusName = document.querySelector('[name="bussines_name"]')?.value;
      let thisprodType = document.querySelector('[name="type_product"]')?.value;
      let thiscolorDesc = document.querySelector('[name="color_desc"]')?.value;
      let thisDalleApiKey = document.querySelector('[name="dalle_api_key"]')?.value;
      let thisStableApiKey = document.querySelector('[name="stable_api_key"]')?.value;

      let thistextPrompt = document.querySelector('[name="text_prompt"]')?.value;
      let thislogoPrompt = document.querySelector('[name="logo_prompt"]')?.value;
      let thisimagePrompt = document.querySelector('[name="image_prompt"]')?.value;
      let thiscolorPrompt = document.querySelector('[name="color_prompt"]')?.value;
      // let thisImageModel = document.querySelector('[name="image_model"]')?.value;

      if(thisbusName?.trim() === "" || thisprodType?.trim() === "" || thiscolorDesc?.trim() === "" || thisDalleApiKey?.trim() === "" || thisStableApiKey?.trim() === "") 
      return alert("Please add empty input fileds!");

      let useAiColor = document.querySelector('[name="use_ai_color"]:checked')?.value;
      let useAiImage = document.querySelector('[name="use_ai_image"]:checked')?.value;
      let useAiLogo = document.querySelector('[name="use_ai_logo"]:checked')?.value;
      let useAiModel = document.querySelector('[name="image_model"]:checked')?.value;

      isAiColor = (useAiColor === "yes") ? true : false;
      isAiImage = (useAiImage === "yes") ? true : false;
      isAiLogo = (useAiLogo === "yes") ? true : false;
      
      busNamePromp = thisbusName;
      prodTypePromp = thisprodType;
      colorDescPromp = thiscolorDesc;
      aiDalleApiKey = thisDalleApiKey;
      aiStableApiKey = thisStableApiKey;

      textPrompt = thistextPrompt;
      logoPrompt = thislogoPrompt;
      imagePrompt = thisimagePrompt;
      colorPrompt = thiscolorPrompt;
      imageModel = useAiModel;

      prevStepContent.classList.remove('active');
      nextStepContent.classList.add('active');
      
      if(isAiColor){
        let newColorPropmt = colorPrompt?.replace("[colorDescPromp]", colorDescPromp);
        let getColorsParse = await createTextAi(newColorPropmt);
        if(getColorsParse === "Unauthorized") alertMessage.textContent = getColorsParse;
        if(getColorsParse === "Unauthorized") return smallLoading.classList.add('active');
        getcolors = JSON.parse(getColorsParse);

        let getBgColors = null;
        let getTextColors = null;


        let bgColorsFileds = document.querySelectorAll('.py__ai-bg-color');
        let colorsFileds = document.querySelectorAll('.py__ai-color');
        // alertMessage.textContent = `Generating New Logo and Colors`;
        getBgColors = [];
        getTextColors = [];
        if(getcolors?.backgrounds){
          for(let i=0; i<getcolors.backgrounds.length; i++){
            let aiColorItem = getcolors.backgrounds[i];
            getBgColors.push(aiColorItem.backgroundHex || aiColorItem.background);
            getTextColors.push(aiColorItem.textHex || aiColorItem.text);
          }
        }
        getBgColors.reverse();
        
        for(let i=0; i<5; i++){
          let bgColorFiled = bgColorsFileds[i]; 
          let colorFiled = colorsFileds[i];
          let bgColorName = bgColorFiled.getAttribute('name');
          let colorName = colorFiled.getAttribute('name');
          bgColorFiled.value = getBgColors[i];
          bgColorFiled.setAttribute("value", getBgColors[i]);
          bgColors[bgColorName.replace('py_bg_color_', '')] = getBgColors[i];
          colorFiled.value = getTextColors[i];
          colorFiled.setAttribute("value", getTextColors[i]);
          textColors[colorName.replace('py_color_', '')] = getTextColors[i];
          let wrapBgColor = bgColorFiled.closest('.py__label-for-color');
          let wrapColor = colorFiled.closest('.py__label-for-color');
          wrapBgColor.style.backgroundColor = getBgColors[i];
          wrapColor.style.backgroundColor = getTextColors[i];
          // alertCount.textContent = (i + 1) * 2;
        }
      };

    };

  };

  let currentUrl = null;
  let currentKey = null;
  let currentLogo = null;
  let firstTime = true;
  const pickTheme = async (event, randomBtn=false) => {
    if(!event) return;
    let url = null;
    let remixContent = document.querySelector('.py__remix-content');
    if(randomBtn && document.getElementById('other_themes').checked){
      if(currentKey === null) currentKey = allThemesID.indexOf(currentUrl);
      currentKey = currentKey + 1;
      url = (currentKey > (allThemesID.length - 1)) 
      ? `/remix/${allThemesID[0]}?page=index`
      : `/remix/${allThemesID[currentKey]}?page=index`;
    } else if (currentUrl === null) {
      url = event.target.getAttribute('data-href');
      currentUrl = event.target.getAttribute('data-id');
    } else {
      randomFun(false, true, true);
    }
    if(!url || !remixContent) return;
    loading?.classList.add("py__animate");
    let response = await fetch(url);
    let data = await response.text();
    let parser = new DOMParser();
    let html = parser.parseFromString(data, "text/html");
    let randomSettingsEl = html.querySelector('body');
    // AI GET NEW TEXTS FOR THEME
    
    remixContent.innerHTML = randomSettingsEl.innerHTML;
    document.querySelector('.py__themes').classList.remove('active');
    document.querySelector('.py__next-header').style.display = "none";
    remixContent?.classList?.add('active');
    loading?.classList.remove("py__animate");
    if(firstTime){
      firstTime = false;
      randomFun(false);
    } else {
      randomFun(false, true, false);
    }
      
  };

  const randomFun = async (event=false, aiColors=false, aiLogo=true) => {

    if (event) event.preventDefault();
    smallLoading?.classList.add("active");

    // await generateRandomColors();
    
    // await setColorToSettings();
    // fontsCount++;
    // if (fontsCount >= fonts.length) fontsCount = 0;
    // if (remixCount >= imageBanner[allThemesID[currentThemeKey]]?.length) {
    //   remixCount = 0;
    //   clearTheme();
    //   currentThemeKey++;
    //   if (currentThemeKey >= allThemesID?.length) currentThemeKey = 0;
    //   let remixUrl =
    //     "/remix/" + allThemesID[currentThemeKey] + location?.search;
    //   await getSettingsLists(false, remixUrl);
    // } else {
      try {
        
        // console.log("Save Started");
        // let saveSetting = await saveSettingsValues();
        // console.log(saveSetting, "Save finished");
        // await setColorToSettings();
        // console.log("View Iframe Started");
        // await viewIframe(true);
        // console.log("View Iframe DONE");
        if(isAiColor && aiColors){
          let newColorPropmt = colorPrompt?.replace("[colorDescPromp]", colorDescPromp);
          let getColorsParse = await createTextAi(newColorPropmt);
          if(getColorsParse === "Unauthorized") alertMessage.textContent = getColorsParse;
          if(getColorsParse === "Unauthorized") return smallLoading.classList.add('active');
          getcolors = JSON.parse(getColorsParse);
  
          let getBgColors = null;
          let getTextColors = null;
  
  
          let bgColorsFileds = document.querySelectorAll('.py__ai-bg-color');
          let colorsFileds = document.querySelectorAll('.py__ai-color');
          // alertMessage.textContent = `Generating New Logo and Colors`;
          getBgColors = [];
          getTextColors = [];
          if(getcolors?.backgrounds){
            for(let i=0; i<getcolors.backgrounds.length; i++){
              let aiColorItem = getcolors.backgrounds[i];
              getBgColors.push(aiColorItem.backgroundHex || aiColorItem.background);
              getTextColors.push(aiColorItem.textHex || aiColorItem.text);
            }
          }
          getBgColors.reverse();
          
          for(let i=0; i<5; i++){
            let bgColorFiled = bgColorsFileds[i]; 
            let colorFiled = colorsFileds[i];
            let bgColorName = bgColorFiled.getAttribute('name');
            let colorName = colorFiled.getAttribute('name');
            bgColorFiled.value = getBgColors[i];
            bgColorFiled.setAttribute("value", getBgColors[i]);
            bgColors[bgColorName.replace('py_bg_color_', '')] = getBgColors[i];
            colorFiled.value = getTextColors[i];
            colorFiled.setAttribute("value", getTextColors[i]);
            textColors[colorName.replace('py_color_', '')] = getTextColors[i];
            let wrapBgColor = bgColorFiled.closest('.py__label-for-color');
            let wrapColor = colorFiled.closest('.py__label-for-color');
            wrapBgColor.style.backgroundColor = getBgColors[i];
            wrapColor.style.backgroundColor = getTextColors[i];
            // alertCount.textContent = (i + 1) * 2;
          }
        };


        if(isAiLogo && aiLogo){
          alertMessage.textContent = `Generating Logo`;
          alertCount.style.display = "none";
          let logoPropmt = logoPrompt.replace("[prodTypePromp]", prodTypePromp).replace("[busNamePromp]", busNamePromp);
          let getNewlogo = await createImageAi(imageModel, logoPropmt);
          let logoFiled = document.querySelector('.py__ai-logo');
          if(logoFiled && getNewlogo){
            logoFiled.value = getNewlogo;
            currentLogo = getNewlogo;
            await setColorToSettings();
            await saveSettingsValues();
            await viewIframe();
          }
        } else {
          let logoFiled = document.querySelector('.py__ai-logo');
          if(logoFiled && currentLogo !== null){
            logoFiled.value = currentLogo;
            await setColorToSettings();
            await saveSettingsValues();
            await viewIframe();
          }
        };
        

        let allTextFileds = document.querySelectorAll('.py__ai-text');
        alertMessage.textContent = `Generating New Texts ${allTextFileds.length}`;
        let countText = allTextFileds.length / 4;
        let textIndex1 = 0;
        let textIndex2 = 0;
        let alertCountIndex = 1;
        alertCount.style.display = "flex";
        alertCount.textContent = alertCountIndex;
        for(let j=1; j<=parseInt(countText); j++){
          let textLenght = j * 4;  
          let allText = "";
          for(textIndex1; textIndex1<textLenght; textIndex1++){
            let textFiled = allTextFileds[textIndex1];
            if(textFiled?.value?.trim() !== ""){
              allText += textFiled.value + " | "; 
            }
          }
          if(allText.trim() !== ""){
            let newTextPrompt = textPrompt.replace("[prodTypePromp]", prodTypePromp).replace("[texts]", allText);
            let getNewText = await createTextAi(newTextPrompt);
            let parseText = JSON.parse(getNewText);
            let aiTextI = 0;
            for(textIndex2; textIndex2<textLenght; textIndex2++){
              let textValue = (parseText.items[aiTextI]) ? parseText.items[aiTextI].value : parseText.items.value;
              let textFiled = allTextFileds[textIndex2];
              if(textFiled?.value?.trim() !== "" && textValue !== undefined){
                textFiled.value = textValue;
              }
              alertCount.textContent = alertCountIndex;
              alertCountIndex++;
              aiTextI++;
            }
          }
        }
        await saveSettingsValues();
        await viewIframe(true);
        
        let iframes = document.querySelectorAll('.py__view-iframe');

        if(isAiImage){
          let imagesFiled = document.querySelectorAll('.py__ai-image');
          alertMessage.textContent = `Generating New Images ${imagesFiled.length}`;
          alertCount.style.display = "flex";
          alertCount.textContent = 0;
          for(let i=0; i<imagesFiled.length; i++){
            let imageFiled = imagesFiled[i];
            let imageId = imageFiled.getAttribute("data-id");
            let imageAlt = null;
            for (let i = 0; i < iframes.length; i++) {
              let iframeItem = iframes[i];
              let iframeItemContent = iframeItem.contentDocument || iframeItem.contentWindow.document;
              let imageWrapper = iframeItemContent.querySelector(`#${imageId}`);
              if(imageWrapper) imageWrapper.insertAdjacentHTML('beforeend', '<div class="py__image-ai-loading"><div class="wave"></div><div class="wave"></div><div class="wave"></div><div class="wave"></div><div class="wave"></div><div class="wave"></div><div class="wave"></div><div class="wave"></div><div class="wave"></div><div class="wave"></div></div>');
              let imageItem = imageWrapper?.querySelector('img');
              imageAlt = imageItem?.getAttribute('alt');
            }
            let newImagePrompt =  (imageAlt) 
            ? imagePrompt.replace("[prodTypePromp]", prodTypePromp).replace("[altText]", imageAlt)
            : imagePrompt.replace("[prodTypePromp]", prodTypePromp).replace("[altText]", busNamePromp);
            let getNewImage = await createImageAi(imageModel, newImagePrompt)
            imageFiled.value = getNewImage;
            alertCount.textContent = i;
            for (let i = 0; i < iframes.length; i++) {
              let iframeItem = iframes[i];
              let iframeItemContent = iframeItem.contentDocument || iframeItem.contentWindow.document;
              let imageWrapper = iframeItemContent?.querySelector(`#${imageId}`);
              if(imageWrapper) imageWrapper.querySelector('.py__image-ai-loading').remove();
              let imageItem = imageWrapper?.querySelector('img');
              imageItem?.setAttribute('src', getNewImage);
            }
            // await saveSettingsValues();
            // await viewIframe(true);
          };
        }
  
        return smallLoading?.classList.remove("active");

        // let imageBannerSections = document.querySelectorAll(
        //   '[data-section-handle="image-banner"]'
        // );
        // if (imageBannerSections?.length) {
        //   imageBannerSections?.forEach((imageBannerSection) => {
        //     let imageBannerSectionId =
        //       imageBannerSection?.getAttribute("data-section-id");
        //     let imageBannerContent = imageBannerSection?.closest(".py__closest");
        //     let imageBannerBlocks = imageBannerContent?.querySelectorAll(
        //       ".py__settings-block-item"
        //     );

        //     if (
        //       imageBanner[allThemesID[currentThemeKey]]?.length &&
        //       imageBanner[allThemesID[currentThemeKey]][remixCount][
        //         imageBannerSectionId
        //       ]
        //     ) {
        //       let fileds = imageBannerSection.querySelectorAll("[name]");
        //       if (fileds?.length) {
        //         for (let i = 0; i < fileds.length; i++) {
        //           let filed = fileds[i];
        //           let filedName = filed.getAttribute("name");
        //           if (
        //             typeof imageBanner[allThemesID[currentThemeKey]][remixCount][
        //               imageBannerSectionId
        //             ].settings[filedName] !== "undefined"
        //           )
        //             filed.value =
        //               imageBanner[allThemesID[currentThemeKey]][remixCount][
        //                 imageBannerSectionId
        //               ].settings[filedName];
        //         }
        //       }
        //       if (imageBannerBlocks?.length) {
        //         for (let i = 0; i < imageBannerBlocks.length; i++) {
        //           let block = imageBannerBlocks[i];
        //           let blockId = block.getAttribute("data-block-id");
        //           let findAllFileds = block.querySelectorAll("[name]");
        //           if (findAllFileds?.length) {
        //             for (let j = 0; j < findAllFileds.length; j++) {
        //               let filed = findAllFileds[j];
        //               let filedName = filed
        //                 .getAttribute("name")
        //                 .replace("block_", "");
        //               if (
        //                 imageBanner[allThemesID[currentThemeKey]][remixCount][
        //                   imageBannerSectionId
        //                 ]?.blocks &&
        //                 imageBanner[allThemesID[currentThemeKey]][remixCount][
        //                   imageBannerSectionId
        //                 ]?.blocks[blockId] &&
        //                 typeof imageBanner[allThemesID[currentThemeKey]][
        //                   remixCount
        //                 ][imageBannerSectionId]?.blocks[blockId].settings[
        //                   filedName
        //                 ] !== "undefined"
        //               )
        //                 filed.value =
        //                   imageBanner[allThemesID[currentThemeKey]][remixCount][
        //                     imageBannerSectionId
        //                   ]?.blocks[blockId].settings[filedName];
        //             }
        //           }
        //         }
        //       }
        //     }
        //   });
        // }

        // remixCount++;

        // await saveSettingsValues();
        // await viewIframe(true);
      } catch(err){
        console.log(err, "ERROR");
        await saveSettingsValues();
        await viewIframe(true);
      }

    // }
  };


  const savePrompts = async (event) => {
    if (!event) return;
    event.preventDefault();
    let form = event.target;
    let url = form.getAttribute("action");
    if (!url) return;
    loading?.classList.add("py__animate");
    let formData = new FormData(form);
    let ObjectFormData = Object.fromEntries(formData.entries());
    let body = JSON.stringify(ObjectFormData);
    let savePropmtRequest = await fetch(url, { ...fetchConfig(), body });
    let savePromptData = await savePropmtRequest.json();
    return loading?.classList.remove("py__animate");
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
        let newColor = getContrastHex(value);
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
          let contrastColor = getContrastName(colorCode);
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
    if (e && e.target.classList.contains("py__addtheme-form")) return addTheme(e);
    if (e && e.target.classList.contains("py__openai-form")) return openAiApi(e);
    if (e && e.target.classList.contains("py__remix-prompt-form")) return savePrompts(e);
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
    if (e && e.target.classList.contains("py__add-new-remix-button")) return save(e, true);
    if (e && e.target.classList.contains("py__save-figma-button"))
      return saveFigma(e);
    if (e && e.target.classList.contains("py__download-button"))
      return download(e);
    if (e && e.target.classList.contains("py__button-random"))
      return pickTheme(e, true);
    if (e && e.target.classList.contains("py__remix-section-styles-btn"))
      return randomSectionFun(e);
    if (e && e.target.classList.contains("py__button-bussines"))
      return bussinesName(e);
    if (e && e.target.classList.contains("py__step-next-btn"))
      return nextStep(e);
    if (e && e.target.classList.contains("py__button-pick"))
      return pickTheme(e);
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
    smallLoading = document.querySelector(".py__loading-small");
    alertCount = smallLoading.querySelector('.count');
    alertMessage = smallLoading.querySelector('.message');
    saveButton = document.querySelector(".py__save-button");
    downloadButton = document.querySelector(".py__download-button");
    themeName =
      document.querySelector('[name="settings_theme_name"]')?.value ||
      "ThemeMake";
  });

})();

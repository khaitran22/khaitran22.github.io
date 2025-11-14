// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "During my Ph.D. time, I have tutored several courses.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-an-intuitive-note-about-transformers-architecture",
        
          title: "An Intuitive Note about Transformers Architecture",
        
        description: "My note to understand Transformers architecture intuitively.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/transformers-math-intuition/";
          
        },
      },{id: "post-coin-toss-problem",
        
          title: "Coin Toss Problem",
        
        description: "My notes for the Coin Toss Problem",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/coin-toss-game/";
          
        },
      },{id: "post-house-robber-ii-problem-leetcode-213",
        
          title: "House Robber II problem - Leetcode 213",
        
        description: "My notes for the House Robber II problem on Leetcode",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/leetcode-213/";
          
        },
      },{id: "post-house-robber-problem-leetcode-198",
        
          title: "House Robber problem - Leetcode 198",
        
        description: "My notes for the House Robber problem on Leetcode",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/leetcode-198/";
          
        },
      },{id: "books-chip-war",
          title: 'Chip War',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/chip_war/";
            },},{id: "books-the-psychology-of-money",
          title: 'The Psychology of Money',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/psychology_of_money/";
            },},{id: "books-the-science-of-fear",
          title: 'The Science of Fear',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/science_of_fear/";
            },},{id: "news-my-paper-entitled-improving-traffic-load-prediction-with-multi-modality-a-case-study-of-brisbane-was-accepted-by-ajcai-2022",
          title: 'My paper entitled “Improving Traffic Load Prediction with Multi-modality: A Case Study of...',
          description: "",
          section: "News",},{id: "news-i-officially-completed-my-master-of-information-technology-degree-at-the-university-of-queensland",
          title: 'I officially completed my Master of Information Technology degree at the University of...',
          description: "",
          section: "News",},{id: "news-i-39-ve-been-offered-admission-to-the-ph-d-program-in-ai-nlp-at-the-university-of-queensland-for-the-next-four-years",
          title: 'I&amp;#39;ve been offered admission to the Ph.D. program in AI/NLP at the University...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "news-presented-my-paper-improving-traffic-load-prediction-with-multi-modality-a-case-study-of-brisbane-at-ajcai-2021-conference",
          title: 'Presented my paper “Improving Traffic Load Prediction with Multi-modality: A Case Study of...',
          description: "",
          section: "News",},{id: "news-my-paper-entitled-cder-collaborative-evidence-retrieval-for-document-level-relation-extraction-was-accepted-for-publication-and-presentation-by-aciids-2024",
          title: 'My paper entitled “CDER: Collaborative Evidence Retrieval for Document-level Relation Extraction” was accepted...',
          description: "",
          section: "News",},{id: "news-presented-my-paper-cder-collaborative-evidence-retrieval-for-document-level-relation-extraction-at-aciids-2024-conference",
          title: 'Presented my paper “CDER: Collaborative Evidence Retrieval for Document-level Relation Extraction” at ACIIDS...',
          description: "",
          section: "News",},{id: "news-my-paper-entitled-vaediff-docre-end-to-end-data-augmentation-framework-for-document-level-relation-extraction-was-accepted-for-publication-by-coling-2025",
          title: 'My paper entitled “VaeDiff-DocRE: End-to-end Data Augmentation Framework for Document-level Relation Extraction” was...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%72%61%6E%70%68%61%6E.%6B%68%61%69@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/khaitran22", "_blank");
        },
      },{
        id: 'social-leetcode',
        title: 'LeetCode',
        section: 'Socials',
        handler: () => {
          window.open("https://leetcode.com/u/khaiptran22/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/khaitran22", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-9870-4185", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=BKhhjpYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

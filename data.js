// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

const dataInfo = `[
    {
        "id": "7158",
        "type": "anime",
        "links": {
            "self": "https://kitsu.io/api/edge/anime/7158"
        },
        "attributes": {
            "synopsis": "In 1868, Dario Brando saves the life of an English nobleman, George Joestar. By taking in Dario's son Dio when the boy becomes fatherless, George hopes to repay the debt he owes to his savior. However Dio, unsatisfied with his station in life, aspires to seize the Joestar house for his own. Wielding an Aztec stone mask with supernatural properties, he sets out to destroy George and his son, Jonathan Joestar, and triggers a chain of events that will continue to echo through the years to come",
            "titles": {
                "en": "JoJo's Bizarre Adventure (2012)",
                "en_jp": "JoJo no Kimyou na Bouken (TV)"
            },
            "averageRating": "80.46",
            "startDate": "2012-10-06",
            "endDate": "2013-04-06",
            "posterImage": {
                "small": "https://media.kitsu.io/anime/7158/poster_image/small-bde68eb96267be7833813f3a85b68df0.jpeg",
                "original": "https://media.kitsu.io/anime/7158/poster_image/86c1aa856e619b058a9dd008f83440ce.jpg"
            },
            "episodeCount": 26
        }
    },


    {
        "id": "3136",
        "type": "anime",
        "links": {
            "self": "https://kitsu.io/api/edge/anime/3136"
        },
        "attributes": {
            "synopsis": "An adaptation of the original five volume arc of the popular JoJo's Bizarre Adventure manga, covering the Phantom Blood chapters. Jonathan Joestar is an aristocratic boy whose life is suddenly turned upside down by a mysterious new boy who arrives, Dio Brando. Dio has a connection to his father, and over time, a rivalry forms as Dio becomes obsessed with a mysterious, ancient, and mystical stone mask that Jonathan's father keeps.",
            "titles": {
                "en": "JoJo's Bizarre Adventure: Phantom Blood",
                "en_jp": "JoJo no Kimyou na Bouken: Phantom Blood"
            },
            "averageRating": "80.86",
            "startDate": "2007-02-17",
            "endDate": "2007-02-17",
            "posterImage": {
                "small": "https://media.kitsu.io/anime/poster_images/3136/small.jpg",
                "original": "https://media.kitsu.io/anime/poster_images/3136/original.jpg"
            },
            "episodeCount": 1
        }
    },


    {
        "id": "11459",
        "type": "anime",
        "links": {
            "self": "https://kitsu.io/api/edge/anime/11459"
        },
        "attributes": {
            "synopsis": "The year is 1999. Morioh, a normally quiet and peaceful town, has recently become a hotbed of strange activity. Joutarou Kuujou, now a marine biologist, heads to the mysterious town to meet Jousuke Higashikata. While the two may seem like strangers at first, Jousuke is actually the illegitimate child of Joutarou's grandfather, Joseph Joestar. When they meet, Joutarou realizes that he may have more in common with Jousuke than just a blood relation.",
            "titles": {
                "en": "JoJo's Bizarre Adventure: Diamond is Unbreakable",
                "en_jp": "JoJo no Kimyou na Bouken: Diamond wa Kudakenai"
            },
            "averageRating": "81.97",
            "startDate": "2016-04-02",
            "endDate": "2016-12-24",
            "posterImage": {
                "small": "https://media.kitsu.io/anime/poster_images/11459/small.jpg",
                "original": "https://media.kitsu.io/anime/poster_images/11459/original.jpg"
            },
            "episodeCount": 39
        }
    },

    {
        "id": "8063",
        "type": "anime",
        "links": {
            "self": "https://kitsu.io/api/edge/anime/8063"
        },
        "attributes": {
            "synopsis": "Years after an ancient evil was salvaged from the depths of the sea, Joutarou Kuujou sits peacefully within a Japanese jail cell. He's committed no crime yet demands he not be released, believing he's been possessed by an evil spirit capable of harming those around him. Concerned for her son, Holly Kuujou asks her father, Joseph Joestar, to convince Joutarou to leave the prison. Joseph informs his grandson that the is in fact something called a Stand, the physical manifestation of one's fighting spirit which can adopt a variety of deadly forms. After a fiery brawl with Joseph's friend Mohammed Avdol, Joutarou is forced out of his cell and begins learning how to control the power of his Stand.",
            "titles": {
                "en": "JoJo's Bizarre Adventure: Stardust Crusaders",
                "en_jp": "JoJo no Kimyou na Bouken: Stardust Crusaders"
            },
            "averageRating": "81.68",
            "startDate": "2014-04-05",
            "endDate": "2014-09-13",
            "posterImage": {
                "small": "https://media.kitsu.io/anime/poster_images/8063/small.jpg",
                "original": "https://media.kitsu.io/anime/poster_images/8063/original.jpg"
            },
            "episodeCount": 24
        }
    },

    {
        "id": "8739",
        "type": "anime",
        "links": {
            "self": "https://kitsu.io/api/edge/anime/8739"
        },
        "attributes": {
            "synopsis": "Joutarou Kuujou and his allies have finally made it to Egypt, where the immortal Dio awaits. Upon their arrival, the group gains a new comrade: Iggy, a mutt who wields the Stand The Fool. It's not all good news however, as standing in their path is a new group of Stand users who serve Dio, each with a Stand representative of an ancient Egyptian god. As their final battle approaches, it is a race against time to break Joutarou's mother free from her curse and end Dio's reign of terror over the Joestar family once and for all.",
            "titles": {
                "en": "JoJo's Bizarre Adventure: Stardust Crusaders - Battle in Egypt",
                "en_jp": "JoJo no Kimyou na Bouken: Stardust Crusaders 2nd Season"
            },
            "averageRating": "81.97",
            "startDate": "2015-01-10",
            "endDate": "2015-06-20",
            "posterImage": {
                "small": "https://media.kitsu.io/anime/poster_images/8739/small.jpg",
                "original": "https://media.kitsu.io/anime/poster_images/8739/original.jpg"
            },
            "episodeCount": 24
        }
    },

    {
        "id": "610",
        "type": "anime",
        "links": {
            "self": "https://kitsu.io/api/edge/anime/610"
        },
        "attributes": {
            "synopsis": "Kujo Jotaro is a normal, popular Japanese high-schooler, until he thinks that he is possessed by a spirit, and locks himself in prison. After seeing his grandfather, Joseph Joestar, and fighting Joseph's friend Muhammad Abdul, Jotaro learns that the Spirit is actually Star Platinum, his Stand, or fighting energy given a semi-solid form. Later, his mother gains a Stand, and becomes sick. Jotaro learns that it is because the vampire Dio Brando has been revived 100 years after his defeat to Jonathan Joestar, Jotaro's great-great-grandfather. Jotaro decides to join Joseph and Abdul in a trip to Egypt to defeat Dio once and for all.",
            "titles": {
                "en": "JoJo's Bizarre Adventure (1993)",
                "en_jp": "JoJo no Kimyou na Bouken"
            },
            "averageRating": "74.49",
            "startDate": "1993-11-19",
            "endDate": "1994-11-18",
            "posterImage": {
                "small": "https://media.kitsu.io/anime/610/poster_image/small-72f258d13f21f75c48301992af5bb14e.jpeg",
                "original": "https://media.kitsu.io/anime/610/poster_image/09b61fd5d75cf7086acc1d9ed811e80e.jpg"
            },
            "episodeCount": 6
        }
    },

    {
        "id": "7730",
        "type": "anime",
        "links": {
            "self": "https://kitsu.io/api/edge/anime/7730"
        },
        "attributes": {
            "synopsis": "Kujo Jotaro is a normal, popular Japanese high-schooler, until he thinks that he is possesed by a spirit, and locks himself in prison. After seeing his grandfather, Joseph Joestar, and fighting Joseph's friend Muhammad Abdul, Jotaro learns that the Spirit is actually Star Platinum, his Stand, or fighting energy given a semi-solid form. Later, his mother gains a Stand, and becomes sick. Jotaro learns that it is because the vampire Dio Brando has been revived 100 years after his defeat to Jonathan Joestar, Jotaro's great-great-grandfather. Jotaro decides to join Joseph and Abdul in a trip to Egypt to defeat Dio once and for all.",
            "titles": {
                "en": "JoJo's Bizarre Adventure (2000)",
                "en_jp": "JoJo no Kimyou na Bouken: Adventure"
            },
            "averageRating": "71.15",
            "startDate": "2000-05-25",
            "endDate": "2002-01-25",
            "posterImage": {
                "small": "https://media.kitsu.io/anime/7730/poster_image/small-bbd6d133ef6aa2e96fd97883ad9a4307.jpeg",
                "original": "https://media.kitsu.io/anime/7730/poster_image/c4a550a11a0c75b69eb97f3a6e6338df.jpg"
            },
            "episodeCount": 7
        }
    },

    {
        "id": "13306",
        "type": "anime",
        "links": {
            "self": "https://kitsu.io/api/edge/anime/13306"
        },
        "attributes": {
            "synopsis": "In 1868, Dario Brando saves the life of an English nobleman, George Joestar. By taking in Dario's son Dio when the boy becomes fatherless, George hopes to repay the debt he owes to his savior. However Dio, unsatisfied with his station in life, aspires to seize the Joestar house for his own. Wielding an Aztec stone mask with supernatural properties, he sets out to destroy George and his son, Jonathan JoJo Joestar, and triggers a chain of events that will continue to echo through the years to come.",
            "titles": {
                "en": "JoJos Bizarre Adventure Re-edited",
                "en_jp": "JoJo no Kimyou na Bouken Re-edited"
            },
            "averageRating": "81.66",
            "startDate": "2012-12-31",
            "endDate": "2012-12-31",
            "posterImage": {
                "small": "https://media.kitsu.io/anime/poster_images/13306/small.jpg",
                "original": "https://media.kitsu.io/anime/poster_images/13306/original.jpg"
            },
            "episodeCount": 3
        }
    },

    {
        "id": "41410",
        "type": "anime",
        "links": {
            "self": "https://kitsu.io/api/edge/anime/41410"
        },
        "attributes": {
            "synopsis": "Naples, 2001. Giorno Giovanna is a small-time crook with one big dream—to become a Gang-Star. No ordinary thief, Giorno has a connection to the remarkable Joestar bloodline, and possesses a Stand named Gold Experience. His dream starts to become reality when he meets Bruno Buccellati, a mobster from the gang Passione and a fellow Stand user himself. Realizing that they share similar ideals, and both disagree with the gang's harmful affairs, Giorno reveals his goal to Bruno: with Bruno's help, he will reform Passione by overthrowing the boss.",
            "titles": {
                "en": "JoJo's Bizarre Adventure: Golden Wind",
                "en_jp": "JoJo no Kimyou na Bouken: Ougon no Kaze"
            },
            "averageRating": "81.96",
            "startDate": "2018-10-06",
            "endDate": "2019-07-28",
            "posterImage": {
                "small": "https://media.kitsu.io/anime/poster_images/41410/small.jpg",
                "original": "https://media.kitsu.io/anime/poster_images/41410/original.png"
            },
            "episodeCount": 39
        }
    },

    {
        "id": "42116",
        "type": "anime",
        "links": {
            "self": "https://kitsu.io/api/edge/anime/42116"
        },
        "attributes": {
            "synopsis": "Recap of the first 13 episodes of JoJo no Kimyou na Bouken: Ougon no Kaze series.",
            "titles": {
                "en": "JoJo's Bizarre Adventure: Golden Wind Recap",
                "en_jp": "JoJo no Kimyou na Bouken: Ougon no Kaze Recap"
            },
            "averageRating": "74.33",
            "startDate": "2019-01-05",
            "endDate": "2019-05-04",
            "posterImage": {
                "small": "https://media.kitsu.io/anime/poster_images/42116/small.jpg",
                "original": "https://media.kitsu.io/anime/poster_images/42116/original.jpg"
            },
            "episodeCount": 3
        }
    }
]`
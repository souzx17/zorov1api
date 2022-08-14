const favicon = require("serve-favicon");
const express = require("express");
const router = express.Router();
const dir = process.cwd();

const { 
    whois, 
    genPassword 
} = require(dir + "/function/geradorsenha");
const { 
    igStalk, 
    igDownload 
} = require(dir + "/function/ig");
const { 
    getApk, 
    searchApk 
} = require(dir + "/function/rexdl");

const { 
    yDonlod, 
    yPlay, 
    ySearch 
} = require(dir + "/function/yt");

/**
 * Favicon
 */

router.use(favicon(dir + "/public/favicon.ico"));

/**
 * INDEX (HOME PAGE)
 */

router.get("/", (req, res) => {
    res.cookie("rememberme", "1", { 
        expires: new Date(Date.now() + 900000), 
        httpOnly: true 
        });
    res.cookie("some_cross_domain_cookie", "http://api.masagus.space", { 
        domain: "api.masagus.space", 
        encode: String 
        });
    res.sendfile(dir + "/public/index.html");
});

/**
 * PRIMBON
 */



/**
 * INSTAGRAM
 */

router.get("/ig/stalk", (req, res) => {
    const username = req.query.u || req.query.username || req.query.user || req.query.q;
    igStalk(username)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

router.get("/ig/download", (req, res) => {
    const url = req.query.url || req.query.link;
    igDownload(url)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
});

/**
 * LAINYA
 */


router.get("/geradorsenha", (req, res) => {
    genPassword()
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

/**
 * REXDL
 */

router.get("/rexdl/search", (req, res) => {
    const apkname = req.query.q;
    searchApk(apkname)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.get("/rexdl/get", (req, res) => {
    const url = req.query.url;
    getApk(url)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

/**
 * PHOTOOXY
 */

router.get("/photooxy/shadow", (req, res) => {
    const text1 = req.query.text1;
    pShadow(text1)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.get("/photooxy/romantic", (req, res) => {
    const text1 = req.query.text1;
    pRomantic(text1)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.get("/photooxy/smoke", (req, res) => {
    const text1 = req.query.text1;
    pSmoke(text1)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.get("/photooxy/burn-papper", (req, res) => {
    const text1 = req.query.text1;
    pBurnPapper(text1)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.get("/photooxy/naruto", (req, res) => {
    const text1 = req.query.text1;
    pNaruto(text1)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.get("/photooxy/love-message", (req, res) => {
    const text1 = req.query.text1;
    pLoveMsg(text1)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.get("/photooxy/message-under-grass", (req, res) => {
    const text1 = req.query.text1;
    pMsgGrass(text1)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.get("/photooxy/tiktok", (req, res) => {
    const text1 = req.query.text1;
    const text2 = req.query.text2;
    pTikTok(text1, text2)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.get("/photooxy/double-heart", (req, res) => {
    const text1 = req.query.text1;
    pDoubleHeart(text1)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.get("/photooxy/coffe-cup", (req, res) => {
    const text1 = req.query.text1;
    pCoffeCup(text1)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.get("/photooxy/wolf-metal", (req, res) => {
    const text1 = req.query.text1;
    pWolfMetal(text1)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.get("/photooxy/glowing-neon", (req, res) => {
    const text1 = req.query.text1;
    pGlowingNeon(text1)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

/**
 * YOUTUBE
 */

router.get("/yt/download", (req, res) => {
    const url = req.query.url || req.query.link;
    yDonlod(url)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.get("/yt/play", (req, res) => {
    const query = req.query.q || req.query.query || req.query.judul;
    yPlay(query)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.get("/yt/search", (req, res) => {
    const query = req.query.q || req.query.query || req.query.judul;
    ySearch(query)
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            res.send(error);
        });
});

router.use(function (req, res, next) {
    res.status(404)
        .set("Content-Type", "text/html")
        .sendfile(dir + "/public/404.html");
});

module.exports = router;

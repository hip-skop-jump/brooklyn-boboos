/**
 * Copyright © 2020 Hip Skop Jump, All Rights Reserved
 */

export default function (router) {
    function setTitle (toset) {
        document.title = [APPLICATION_NAME, toset].join(" - ");
    }

    router.beforeEach((to, from, next) => {
        setTitle(to.name);
        next();
    });
}

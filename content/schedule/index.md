---
type: "page"
title: "QGIS User Conference 2026"
subtitle: "5-6 October 2026, Switzerland"
heroImage: "hero.webp"
heroLogo: "logo-white.webp"
heroMenu: "uc-2026"
heroIsUserConference: true
heroSize: "is-halfheight"
HasBanner: true
draft: false
sidebar: true
---

{{< content-start >}}

# Schedule

This page provides both a high-level overview and a [detailed schedule further down](#detailed).

To take the conference schedule with you and plan your days on the go, download the [official conference app](/apps/#conference-app) to browse the full program, mark your favourite talks, and access key information — even offline.

## Overview (Tentative)

More information about the individual activities is available [here](/activities/). Please note that all events require registration and have a limited number of slots.

While the overall structure is set, minor adjustments may still be made as the schedule is finalized.

{{< weekgrid >}}

## Detailed

Note that the schedule is quite wide because of rooms used for workshops. You can scroll horizontally to see
the full schedule.

<button id="scheduleFullSizeButton" class="button is-primary1 is-hidden-mobile">Show schedule in full size</button>
<script>
let fullSize = false;
document.getElementById("scheduleFullSizeButton").addEventListener("click", () => {
    fullSize = !fullSize;

    document.querySelector("p:has(> pretalx-schedule)").classList.toggle("full-size");
    
    document.getElementById("scheduleFullSizeButton").classList.toggle("full-size");
    document.getElementById("scheduleFullSizeButton").innerHTML = fullSize ?
        "Hide schedule full size" : "Show schedule in full size";

    const topNav = document.querySelector("qg-top-nav");
    topNav.hidden = !topNav.hidden;
});
</script>

<script type="text/javascript" src="https://talks.osgeo.org/qgis-uc2026/schedule/widget/v2.en.js"></script>
<style>
p:has(> pretalx-schedule) {
    width: 100%;
    overflow-x: scroll;
}
p:has(> pretalx-schedule).full-size {
    background-color: white;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
}
#scheduleFullSizeButton.full-size {
    z-index: 99999;
    position: fixed;
    top: 5px;
    left: 200px;
}
</style>
<pretalx-schedule event-url="https://talks.osgeo.org/qgis-uc2026/" locale="en" format="grid" style="--pretalx-clr-primary: #589632"></pretalx-schedule>
<noscript>
   <div class="pretalx-widget">
        <div class="pretalx-widget-info-message">
            JavaScript is disabled in your browser. To access our schedule without JavaScript,
            please <a target="_blank" href="https://talks.osgeo.org/qgis-uc2026/schedule/">click here</a>.
        </div>
    </div>
</noscript>


{{< content-end >}}

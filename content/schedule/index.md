---
type: "page"
title: "QGIS User Conference 2026"
subtitle: "5-6 October 2026, Laax, Switzerland"
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
{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-6">}}

This page provides both a high-level overview and a [detailed schedule further down](#detailed).

To take the conference schedule with you and plan your days on the go, download the [official conference app](/apps/#conference-app) to browse the full program, mark your favourite talks, and access key information — even offline.

{{< rich-content-end >}}
{{< rich-box-end >}}

{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-4">}}

## Overview

More information about the individual activities is available [here](/activities/). Please note that all events require registration and have a limited number of slots.

While the overall structure is set, minor adjustments may still be made as the schedule is finalized.

{{< rich-content-end >}}
{{< rich-box-end >}}

{{< weekgrid >}}

{{< rich-box-start >}}
{{< rich-content-start themeClass="coloring-1">}}

## Detailed Schedule

Note that the schedule is quite wide, you can scroll horizontally to see
the full schedule.
{{< rich-content-end >}}
{{< rich-box-end >}}

<button id="conferenceScheduleFullSizeButton" class="button is-primary1 is-hidden-mobile">Show conference schedule in full size</button>
<button id="workshopsScheduleFullSizeButton" class="button is-primary1 is-hidden-mobile">Show workshops schedule in full size</button>
<script>
function setupScheduleFullSizeButton(buttonId, scheduleIndex, showLabel) {
    let fullSize = false;
    const button = document.getElementById(buttonId);
    button.addEventListener("click", () => {
        fullSize = !fullSize;

        document.querySelectorAll("p:has(> pretalx-schedule)")[scheduleIndex].classList.toggle("full-size");

        button.classList.toggle("full-size");
        button.innerHTML = fullSize ? "Hide schedule full size" : showLabel;

        const topNav = document.querySelector("qg-top-nav");
        topNav.hidden = !topNav.hidden;
    });
}

setupScheduleFullSizeButton("conferenceScheduleFullSizeButton", 0, "Show conference schedule in full size");
setupScheduleFullSizeButton("workshopsScheduleFullSizeButton", 1, "Show workshops schedule in full size");
</script>

<script type="text/javascript" src="https://talks.osgeo.org/qgis-uc2026/widgets/schedule.js"></script>

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
#conferenceScheduleFullSizeButton.full-size,
#workshopsScheduleFullSizeButton.full-size {
    z-index: 99999;
    position: fixed;
    top: 5px;
    left: 200px;
}
</style>

### Conference
<pretalx-schedule event-url="https://talks.osgeo.org/qgis-uc2026/" locale="en" format="grid" style="--pretalx-clr-primary: #002033" date-filter="2026-10-05,2026-10-06" room-filter="368,369,370,372,374,373,375"></pretalx-schedule>
<noscript>
   <div class="pretalx-widget">
        <div class="pretalx-widget-info-message">
            JavaScript is disabled in your browser. To access our schedule without JavaScript,
            please <a target="_blank" href="https://talks.osgeo.org/qgis-uc2026/schedule/">click here</a>.
        </div>
    </div>
</noscript>


### Workshops
<pretalx-schedule event-url="https://talks.osgeo.org/qgis-uc2026/" locale="en" format="grid" style="--pretalx-clr-primary: #002033" date-filter="2026-10-07" room-filter="388,396,387,389,390,417"></pretalx-schedule>
<noscript>
   <div class="pretalx-widget">
        <div class="pretalx-widget-info-message">
            JavaScript is disabled in your browser. To access our schedule without JavaScript,
            please <a target="_blank" href="https://talks.osgeo.org/qgis-uc2026/schedule/">click here</a>.
        </div>
    </div>
</noscript>



{{< content-end >}}

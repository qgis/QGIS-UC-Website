---
type: "page"
title: "QGIS User Conference 2026"
subtitle: "5-6 October 2026, Switzerland"
heroImage: "/view.jpg"
heroLogo: "/uc25_logo_re_color.png"
heroMenu: "uc-2026"
heroIsUserConference: true
heroSize: "is-halfheight"
HasBanner: true
draft: false
sidebar: true
---

{{< content-start >}}

# Schedule

This page contains both the detailed schedule with individual sessions, and an [overview/outline further down](#overview).

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

## Overview

You can find more information about the various activities [here](/activities/). Note that slots marked with **\*** require registration and have a limited number of slots.

While the overall outline is set, we might still make some minor adjustments when we finalize the schedule.

<!-- https://divtable.com/generator/ -->
<table style="width: 1020px;">
<tbody>
<tr style="height: 23px;">
<td style="background-color: gray; color: white; height: 23px; width: 42px;">&nbsp;</td>
<th style="background-color: gray; color: white; text-align: center; height: 23px; width: 157px;" colspan="2">Sunday 1/6</th>
<th style="background-color: gray; color: white; text-align: center; height: 23px; width: 112px;">Monday 2/6</th>
<th style="background-color: gray; color: white; text-align: center; height: 23px; width: 110px;">Tuesday 3/6</th>
<th style="background-color: gray; color: white; text-align: center; height: 23px; width: 307px;" colspan="3">Wednesday 4/6</th>
<th style="background-color: gray; color: white; text-align: center; height: 23px; width: 113px;">Thursday 5/6</th>
<th style="background-color: gray; color: white; text-align: center; height: 23px; width: 113px;">Friday 6/6</th>
</tr>
<tr style="height: 11px;">
<td style="width: 42px;">08:00</td>
<td style="height: 11px; width: 157px;" colspan="2">&nbsp;</td>
<td style="background-color: orange; text-align: center; height: 11px; width: 112px;" rowspan="2">Registration</td>
<td style="text-align: center; height: 11px; width: 110px;">&nbsp;</td>
<td style="height: 11px; text-align: center; width: 68px;">&nbsp;</td>
<td style="text-align: center; height: 11px; width: 110px;">&nbsp;</td>
<td style="height: 11px; text-align: center; width: 68px;">&nbsp;</td>
<td style="text-align: center; height: 11px; width: 110px;">&nbsp;</td>
<td style="height: 11px; text-align: center; width: 68px;">&nbsp;</td>
</tr>
<tr style="height: 11px;">
<td style="height: 11px; width: 42px;">08:30</td>
<td style="height: 11px; width: 157px;" colspan="2">&nbsp;</td>
<td style="text-align: center; height: 11px; width: 110px;">&nbsp;</td>
<td style="height: 11px; text-align: center; width: 68px;">&nbsp;</td>
<td style="height: 11px; text-align: center; width: 126.984px;">&nbsp;</td>
<td style="height: 11px; text-align: center; width: 112.016px;">&nbsp;</td>
<td style="background-color: lightsteelblue; text-align: center; height: 116px; width: 113px;" rowspan="7"><a style="color: inherit;" href="https://github.com/qgis/QGIS/wiki/28th-Contributor-Meeting-in-Norrk%C3%B6ping">Contributor Meeting</a></td>
<td style="background-color: lightsteelblue; text-align: center; height: 116px; width: 113px;" rowspan="7"><a style="color: inherit;" href="https://github.com/qgis/QGIS/wiki/28th-Contributor-Meeting-in-Norrk%C3%B6ping">Contributor Meeting</a></td>
</tr>
<tr style="height: 25px;">
<td style="height: 25px; width: 42px;">09:00</td>
<td style="height: 25px; width: 157px;" colspan="2">&nbsp;</td>
<td style="background-color: lightblue; text-align: center; height: 48px; width: 112px;" rowspan="2">Opening Session</td>
<td style="background-color: lightgreen; height: 71px; text-align: center; width: 110px;" rowspan="3">Talks &amp; Workshops</td>
<td style="background-color: lightgreen; height: 105px; text-align: center; width: 68px;" rowspan="6">QField Day*</td>
<td style="background-color: lightgreen; height: 131px; text-align: center; width: 126.984px;" rowspan="8">Hands-on Workshops*</td>
<td style="background-color: lightsteelblue; height: 131px; width: 112.016px; text-align: center;" rowspan="8"><a style="color: inherit;" href="https://github.com/qgis/QGIS/wiki/28th-Contributor-Meeting-in-Norrk%C3%B6ping">Onboarding<br /><br /> Contributor Meeting</a></td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">09:30</td>
<td style="height: 23px; width: 157px;" colspan="2">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">10:00</td>
<td style="height: 23px; width: 157px;" colspan="2">&nbsp;</td>
<td style="background-color: lightpink; text-align: center; height: 23px; width: 112px;">Coffee Break</td>
</tr>
<tr style="height: 9px;">
<td style="height: 9px; width: 42px;">10:30</td>
<td style="height: 9px; width: 157px;" colspan="2">&nbsp;</td>
<td style="background-color: lightblue; text-align: center; height: 19px; width: 112px;" rowspan="2">Opening Session</td>
<td style="background-color: lightpink; height: 9px; text-align: center; width: 110px;">Coffee Break</td>
</tr>
<tr style="height: 10px;">
<td style="height: 10px; width: 42px;">11:00</td>
<td style="height: 10px; width: 157px;" colspan="2">&nbsp;</td>
<td style="background-color: lightgreen; height: 25px; text-align: center; width: 110px;" rowspan="2">Talks &amp; Workshops</td>
</tr>
<tr style="height: 15px;">
<td style="height: 15px; width: 42px;">11:30</td>
<td style="height: 15px; width: 157px;" colspan="2">&nbsp;</td>
<td style="background-color: lightpink; text-align: center; height: 41px; width: 112px;" rowspan="3">Lunch</td>
</tr>
<tr style="height: 3px;">
<td style="height: 3px; width: 42px;">12:00</td>
<td style="height: 3px; width: 157px;" colspan="2">&nbsp;</td>
<td style="height: 48.5px; background-color: lightpink; text-align: center; width: 110px;" rowspan="3">Lunch</td>
<td style="background-color: lightpink; text-align: center; height: 26px; width: 68px;" rowspan="2">Lunch</td>
<td style="background-color: lightpink; height: 26px; width: 113px;" rowspan="2">Lunch</td>
<td style="background-color: lightpink; height: 26px; width: 113px;" rowspan="2">Lunch</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">12:30</td>
<td style="height: 23px; width: 157px;" colspan="2">&nbsp;</td>
</tr>
<tr style="height: 22.5px;">
<td style="height: 22.5px; width: 42px;">13:00</td>
<td style="height: 22.5px; width: 157px;" colspan="2">&nbsp;</td>
<td style="background-color: lightgreen; text-align: center; height: 88.5px; width: 112px;" rowspan="4">Talks &amp; Workshops</td>
<td style="width: 68px; height: 22.5px; text-align: center;">&nbsp;</td>
<td style="background-color: lightpink; height: 44.5px; width: 239px; text-align: center;" colspan="2" rowspan="2">Lunch</td>
</tr>
<tr style="height: 22px;">
<td style="height: 22px; width: 42px;">13:30</td>
<td style="height: 22px; width: 157px;" colspan="2">&nbsp;</td>
<td style="background-color: lightgreen; text-align: center; width: 110px; height: 66px;" rowspan="3">Talks &amp; Workshops</td>
<td style="width: 68px; height: 22px; text-align: center;">&nbsp;</td>
</tr>
<tr style="height: 22px;">
<td style="height: 22px; width: 42px;">14:00</td>
<td style="height: 22px; width: 157px;" colspan="2">&nbsp;</td>
<td style="width: 68px; height: 22px; text-align: center;">&nbsp;</td>
<td style="background-color: lavender; text-align: center; height: 203px; width: 126.984px;" rowspan="9"><a style="color: inherit;" href="/activities/">Social Activities</a>*</td>
<td style="background-color: lightsteelblue; text-align: center; height: 203px; width: 112.016px;" rowspan="9"><a style="color: inherit;" href="https://github.com/qgis/QGIS/wiki/28th-Contributor-Meeting-in-Norrk%C3%B6ping">Onboarding<br /><br /> Contributor Meeting</a></td>
<td style="background-color: lightsteelblue; text-align: center; height: 203px; width: 113px;" rowspan="9"><a style="color: inherit;" href="https://github.com/qgis/QGIS/wiki/28th-Contributor-Meeting-in-Norrk%C3%B6ping">Contributor Meeting</a></td>
<td style="background-color: lightsteelblue; text-align: center; height: 203px; width: 113px;" rowspan="9"><a style="color: inherit;" href="https://github.com/qgis/QGIS/wiki/28th-Contributor-Meeting-in-Norrk%C3%B6ping">Contributor Meeting</a></td>
</tr>
<tr style="height: 22px;">
<td style="height: 22px; width: 42px;">14:30</td>
<td style="height: 22px; width: 157px;" colspan="2">&nbsp;</td>
<td style="width: 68px; height: 22px; text-align: center;">&nbsp;</td>
</tr>
<tr style="height: 22px;">
<td style="height: 22px; width: 42px;">15:00</td>
<td style="height: 22px; width: 157px;" colspan="2">&nbsp;</td>
<td style="background-color: lightpink; height: 22px; text-align: center; width: 112px;">Coffee Break</td>
<td style="background-color: lightpink; height: 22px; text-align: center; width: 110px;">Coffee Break</td>
<td style="width: 68px; height: 22px; text-align: center;">&nbsp;</td>
</tr>
<tr style="height: 22px;">
<td style="height: 22px; width: 42px;">15:30</td>
<td style="height: 22px; width: 157px;" colspan="2">&nbsp;</td>
<td style="background-color: lightgreen; height: 68px; text-align: center; width: 112px;" rowspan="3">Talks &amp; Workshops</td>
<td style="height: 68px; background-color: lightblue; text-align: center; width: 110px;" rowspan="3">Closing Session</td>
<td style="width: 68px; height: 22px; text-align: center;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">16:00</td>
<td style="height: 23px; width: 157px;" colspan="2">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">16:30</td>
<td style="height: 23px; width: 157px;" colspan="2">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">17:00</td>
<td style="height: 23px; width: 157px;" colspan="2">&nbsp;</td>
<td style="height: 23px; width: 112px;">&nbsp;</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">17:30</td>
<td style="height: 23px; width: 157px;" colspan="2">&nbsp;</td>
<td style="height: 23px; width: 112px;">&nbsp;</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">18:00</td>
<td style="height: 23px; width: 157px;">&nbsp;</td>
<td style="background-color: lemonchiffon; text-align: center; height: 138px; width: 157px;" rowspan="8"><a style="color: inherit;" href="/activities/">Warm-up &amp; Early Registration</a></td>
<td style="height: 23px; width: 157px;">&nbsp;</td>
<td style="height: 23px; width: 112px;">&nbsp;</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">18:30</td>
<td style="height: 23px; width: 157px;">&nbsp;</td>
<td style="height: 23px; width: 112px;">&nbsp;</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
<td style="height: 23px; width: 126.984px;">&nbsp;</td>
<td style="height: 23px; width: 112.016px;">&nbsp;</td>
<td style="height: 23px; width: 113px;">&nbsp;</td>
<td style="height: 23px; width: 113px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">19:00</td>
<td style="background-color: lavender; text-align: center; height: 46px; width: 157px;" rowspan="2"><a style="color: inherit;" href="/activities/">Guided City Tour</a>*</td>
<td style="height: 23px; width: 112px;">&nbsp;</td>
<td style="height: 23px; width: 112px;">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
<td style="height: 23px; width: 126.984px;">&nbsp;</td>
<td style="height: 23px; width: 112.016px;">&nbsp;</td>
<td style="height: 23px; width: 113px;">&nbsp;</td>
<td style="height: 23px; width: 113px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">19:30</td>
<td style="background-color: lemonchiffon; text-align: center; height: 207px; width: 112px;" rowspan="9">Social Dinner<br />&amp; Quiz</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
<td style="height: 23px; width: 126.984px;">&nbsp;</td>
<td style="height: 23px; width: 112.016px;">&nbsp;</td>
<td style="background-color: lemonchiffon; text-align: center; height: 161px; width: 113px;" rowspan="7">Contributor Pub</td>
<td style="height: 23px; width: 113px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">20:00</td>
<td style="background-color: lavender; text-align: center; height: 46px; width: 157px;" rowspan="2"><a style="color: inherit;" href="/activities/">Guided City Tour</a>*</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
<td style="height: 23px; width: 126.984px;">&nbsp;</td>
<td style="height: 23px; width: 112.016px;">&nbsp;</td>
<td style="height: 23px; width: 113px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">20:30</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
<td style="height: 23px; width: 126.984px;">&nbsp;</td>
<td style="height: 23px; width: 112.016px;">&nbsp;</td>
<td style="height: 23px; width: 113px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">21:00</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
<td style="height: 23px; width: 126.984px;">&nbsp;</td>
<td style="height: 23px; width: 112.016px;">&nbsp;</td>
<td style="height: 23px; width: 113px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">21:30</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
<td style="height: 23px; width: 126.984px;">&nbsp;</td>
<td style="height: 23px; width: 112.016px;">&nbsp;</td>
<td style="height: 23px; width: 113px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">22:00</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 126.984px;">&nbsp;</td>
<td style="height: 23px; width: 112.016px;">&nbsp;</td>
<td style="height: 23px; width: 113px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">22:30</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
<td style="height: 23px; width: 126.984px;">&nbsp;</td>
<td style="height: 23px; width: 112.016px;">&nbsp;</td>
<td style="height: 23px; width: 113px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">23:00</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 157px;">&nbsp;</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
<td style="height: 23px; width: 126.984px;">&nbsp;</td>
<td style="height: 23px; width: 112.016px;">&nbsp;</td>
<td style="height: 23px; width: 113px;">&nbsp;</td>
<td style="height: 23px; width: 113px;">&nbsp;</td>
</tr>
<tr style="height: 23px;">
<td style="height: 23px; width: 42px;">23:30</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 157px;">&nbsp;</td>
<td style="height: 23px; width: 110px;">&nbsp;</td>
<td style="height: 23px; width: 68px;">&nbsp;</td>
<td style="height: 23px; width: 126.984px;">&nbsp;</td>
<td style="height: 23px; width: 112.016px;">&nbsp;</td>
<td style="height: 23px; width: 113px;">&nbsp;</td>
<td style="height: 23px; width: 113px;">&nbsp;</td>
</tr>
</tbody>
</table>

{{< content-end >}}

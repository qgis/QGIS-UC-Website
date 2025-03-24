---
type: "page"
title: "QGIS User Conference 2025"
subtitle: "2-3 June 2025, Norrköping, Sweden"
heroImage: "/visualization_center.webp"
heroLogo: "/uc25_logo_re_color.png"
heroMenu: "uc-2025"
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

<script type="text/javascript" src="https://talks.osgeo.org/qgis-uc2025/schedule/widget/v2.en.js"></script>
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
<pretalx-schedule event-url="https://talks.osgeo.org/qgis-uc2025/" locale="en" format="grid" style="--pretalx-clr-primary: #589632"></pretalx-schedule>
<noscript>
   <div class="pretalx-widget">
        <div class="pretalx-widget-info-message">
            JavaScript is disabled in your browser. To access our schedule without JavaScript,
            please <a target="_blank" href="https://talks.osgeo.org/qgis-uc2025/schedule/">click here</a>.
        </div>
    </div>
</noscript>

## Overview

You can find more information about the various activities [here](/activities/). Note that slots marked with **\*** require registration and have a limited number of slots.

While the overall outline is set, we might still make some minor adjustments when we finalize the schedule.

<!-- https://divtable.com/generator/ -->
<table>
<tbody>
<tr>
<td style="background-color: gray; color: white;">&nbsp;</td>
<th style="background-color: gray; color: white; text-align: center;">Sunday 1/6</th>
<th style="background-color: gray; color: white; text-align: center;">Monday 2/6</th>
<th style="background-color: gray; color: white; text-align: center;">Tuesday 3/6</th>
<th style="background-color: gray; color: white; text-align: center;" colspan="2">Wednesday 4/6</th>
<th style="background-color: gray; color: white; text-align: center;">Thursday 5/6</th>
<th style="background-color: gray; color: white; text-align: center;">Friday 6/6</th>
</tr>
<tr>
<td>08:30</td>
<td>&nbsp;</td>
<td style="background-color: orange; text-align: center;">Registration</td>
<td style="background-color: lightgreen; text-align: center;" rowspan="3">Talks &amp; Workshops</td>
<td style="background-color: lightgreen; text-align: center;" rowspan="7">Hands-on Workshops*</td>
<td style="background-color: lightsteelblue; text-align: center;" rowspan="7">
<a href="https://github.com/qgis/QGIS/wiki/28th-Contributor-Meeting-in-Norrk%C3%B6ping" style="color:inherit">Onboarding<br/><br/>
Contributor Meeting</a>
</td>
<td style="background-color: lightsteelblue; text-align: center;" rowspan="7"><a href="https://github.com/qgis/QGIS/wiki/28th-Contributor-Meeting-in-Norrk%C3%B6ping" style="color:inherit">Contributor Meeting</a></td>
<td style="background-color: lightsteelblue; text-align: center;" rowspan="7"><a href="https://github.com/qgis/QGIS/wiki/28th-Contributor-Meeting-in-Norrk%C3%B6ping" style="color:inherit">Contributor Meeting</a></td>
</tr>
<tr>
<td>09:00</td>
<td>&nbsp;</td>
<td style="background-color: lightblue; text-align: center;" rowspan="2">Opening Session</td>
</tr>
<tr>
<td>09:30</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>10:00</td>
<td>&nbsp;</td>
<td style="background-color: lightpink; text-align: center;">Coffee Break</td>
<td style="background-color: lightpink; text-align: center;">Coffee Break</td>
</tr>
<tr>
<td>10:30</td>
<td>&nbsp;</td>
<td style="background-color: lightblue; text-align: center;" rowspan="2">Opening Session</td>
<td style="background-color: lightgreen; text-align: center;" rowspan="2">Talks &amp; Workshops</td>
</tr>
<tr>
<td>11:00</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>11:30</td>
<td>&nbsp;</td>
<td style="background-color: lightpink; text-align: center;" rowspan="3">Lunch</td>
<td style="background-color: lightpink; text-align: center;" rowspan="3">Lunch</td>
</tr>
<tr>
<td>12:00</td>
<td>&nbsp;</td>
<td style="background-color: lightpink; text-align: center;" colspan="2" rowspan="2">Lunch</td>
<td style="background-color: lightpink;" rowspan="2">Lunch</td>
<td style="background-color: lightpink;" rowspan="2">Lunch</td>
</tr>
<tr>
<td>12:30</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>13:00</td>
<td>&nbsp;</td>
<td style="background-color: lightgreen; text-align: center;" rowspan="3">Talks &amp; Workshops</td>
<td style="background-color: lightgreen; text-align: center;" rowspan="3">Talks &amp; Workshops</td>
<td style="background-color: lavender; text-align: center;" rowspan="9"><a href="/activities/" style="color:inherit">Social Activities</a>*</td>
<td style="background-color: lightsteelblue; text-align: center;" rowspan="9">
<a href="https://github.com/qgis/QGIS/wiki/28th-Contributor-Meeting-in-Norrk%C3%B6ping" style="color:inherit">Onboarding<br/><br/>
Contributor Meeting</a>
</td>
<td style="background-color: lightsteelblue; text-align: center;" rowspan="9"><a href="https://github.com/qgis/QGIS/wiki/28th-Contributor-Meeting-in-Norrk%C3%B6ping" style="color:inherit">Contributor Meeting</a></td>
<td style="background-color: lightsteelblue; text-align: center;" rowspan="9"><a href="https://github.com/qgis/QGIS/wiki/28th-Contributor-Meeting-in-Norrk%C3%B6ping" style="color:inherit">Contributor Meeting</a></td>
</tr>
<tr>
<td>13:30</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>14:00</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>14:30</td>
<td>&nbsp;</td>
<td style="background-color: lightpink; text-align: center;">Coffee Break</td>
<td style="background-color: lightpink; text-align: center;">Coffee Break</td>
</tr>
<tr>
<td>15:00</td>
<td>&nbsp;</td>
<td style="background-color: lightgreen; text-align: center;" rowspan="5">Talks &amp; Workshops</td>
<td style="background-color: lightgreen; text-align: center;" rowspan="2">Talks &amp; Workshops</td>
</tr>
<tr>
<td>15:30</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>16:00</td>
<td>&nbsp;</td>
<td style="background-color: lightblue; text-align: center;" rowspan="3">Closing Session</td>
</tr>
<tr>
<td>16:30</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>17:00</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>17:30</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>18:00</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>18:30</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>19:00</td>
<td style="background-color: lavender; text-align: center;" rowspan="2"><a href="/activities/" style="color:inherit">Guided City Tour</a>*</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>19:30</td>
<td style="background-color: lemonchiffon; text-align: center;" rowspan="9">Social Dinner<br />&amp; Quiz</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td style="background-color: lemonchiffon; text-align: center;" rowspan="7">Contributor Pub</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>20:00</td>
<td style="background-color: lemonchiffon; text-align: center;" rowspan="6"><a href="/activities/" style="color:inherit">Warm-up &amp; Early Registration</a></td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>20:30</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>21:00</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>21:30</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>22:00</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>22:30</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>23:00</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
<tr>
<td>23:30</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
<td>&nbsp;</td>
</tr>
</tbody>
</table>

{{< content-end >}}

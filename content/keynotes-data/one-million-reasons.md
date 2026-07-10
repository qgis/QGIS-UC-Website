---
order: 3
talk: "One million reasons to maintain the QGIS Infrastructure"
link: "https://talks.osgeo.org/qgis-uc2026/talk/BRMCB9/"
speakers:
  - name: "Lova Andriarimalala"
    avatar: "lova-andriarimalala.jpeg"
  - name: "Tim Sutton"
    avatar: "tim-sutton.jpg"
---

Every time a user opens QGIS, downloads a plugin, or grabs the latest installer, a carefully maintained web of infrastructure quietly does its job in the background. But how does that infrastructure keep running, and what does it actually look like at scale?

In this talk, we pull back the curtain on the systems that power the QGIS ecosystem. With over a petabyte of monthly downloads, over 100k visits and nearly 30k downloads per day on qgis.org alone, and close to 2M plugin downloads monthly through plugins.qgis.org, the scale of what the community relies on is enormous — and largely invisible to its users.

We will walk through the key components of this infrastructure: the main website and download pipeline backed by an S3 bucket and a network of mirrors, the plugin repository serving the global community, the feed analytics that provide the news and quietly registers nearly 1M QGIS launches every day, and the resource-sharing hub at hub.qgis.org. We will also cover supporting services including planet.qgis.org, certification.qgis.org, members.qgis.org, and the emerging user group websites for national communities.

Beyond the architecture, we will share the human side of this work — the decisions, the trade-offs, and the ongoing effort required to keep these services reliable, secure, and scalable for a globally distributed open-source community.

Whether you are a QGIS contributor, a user group organizer, an active user or simply curious about what keeps the ecosystem ticking, this talk offers a behind the scenes look at the foundation everything else is built on.

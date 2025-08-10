# Obsidian Daily Tracker

This is a Obsidian plugin for tracking daily tasks.

## Usage

```

```dataviewjs
// Update this object
const trackerData = {
    entries: [],
}

// Path to the folder with notes
const PATH_TO_YOUR_FOLDER = "jounal/daily";
const PARAMETER_NAME = 'weight';

// You need dataviewjs plugin to get information from your pages
for(let page of dv.pages(`"${PATH_TO_YOUR_FOLDER}"`).where((p) => p[PARAMETER_NAME])){
    trackerData.entries.push({
        date: page.file.name,
        intensity: page[PARAMETER_NAME],
        content: await dv.span(`[](${page.file.name})`)
    });
}

renderDailyTracker(this.container, trackerData);
```

```

## Credit

- https://github.com/mokkiebear/heatmap-tracker

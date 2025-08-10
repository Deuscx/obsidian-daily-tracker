import { Chart } from '@antv/g2'
import { Plugin } from 'obsidian'

interface Entry {
  date: string
  intensity: number
}

function parseEntries(entries: Entry[]) {
  return entries.map((entry) => {
    return {
      date: entry.date,
      value: Number(entry.intensity),
    }
  })
}

function renderDailyTracker(container: HTMLElement, config: any) {
  container.style.height = '400px'
  const data = parseEntries(config.entries)
  const chart = new Chart({
    container,
    autoFit: true,
  })

  chart
    .data(data)
    .encode('x', 'date')
    .encode('y', 'value')
    .scale('x', {
      range: [0, 1],
    })
    .scale('y', {
      domainMin: 0,
      nice: true,
    })

  chart.line().label({
    text: 'value',
    style: {
      dx: -10,
      dy: -12,
    },
  })

  chart.point().style('fill', 'white').tooltip(false)

  chart.render()
}
export default class ObsidianDailyTracker extends Plugin {
  onload(): Promise<void> | void {
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-ignore
    window.renderDailyTracker = renderDailyTracker
  }

  onunload(): void {
  }
}

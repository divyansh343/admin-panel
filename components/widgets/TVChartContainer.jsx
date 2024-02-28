// import styles from "./index.module.css"
import { useEffect, useRef } from "react"
import { widget } from "@/public/static/charting_library"

export const TVChartContainer = props => {
  const chartContainerRef = useRef()

  useEffect(() => {
    const widgetOptions = {
      symbol: props.symbol,
      // BEWARE: no trailing slash is expected in feed URL
      datafeed: new window.Datafeeds.UDFCompatibleDatafeed(
        "https://demo_feed.tradingview.com",
        undefined,
        {
          maxResponseLength: 1000,
          expectedOrder: "latestFirst"
        }
      ),
      interval: props.interval,
      container: chartContainerRef.current,
      library_path: props.library_path,
      locale: props.locale,
      disabled_features: ["use_localstorage_for_settings"],
      enabled_features: ["study_templates"],
      charts_storage_url: props.charts_storage_url,
      charts_storage_api_version: props.charts_storage_api_version,
      client_id: props.client_id,
      user_id: props.user_id,
      fullscreen: props.fullscreen,
      autosize: props.autosize
    }

    const tvWidget = new widget(widgetOptions)

    tvWidget.onChartReady(() => {
      tvWidget.headerReady().then(() => {
        const button = tvWidget.createButton()
        button.setAttribute("title", "Click to show a notification popup")
        button.classList.add("apply-common-tooltip")
        button.addEventListener("click", () =>
          tvWidget.showNoticeDialog({
            title: "Notification",
            body: "TradingView Charting Library API works correctly",
            callback: () => {
              // console.log("Noticed!")
            }
          })
        )

        button.innerHTML = "Check API"
      })
    })

    return () => {
      tvWidget.remove()
    }
  }, [props])

  return (
    <>
      <header className={styles.VersionHeader}>
        <h1>TradingView Charting Library and Next.js Integration Example</h1>
      </header>
      <div ref={chartContainerRef} className={styles.TVChartContainer} />
    </>
  )
}

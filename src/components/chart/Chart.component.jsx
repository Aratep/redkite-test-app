import React, { useState } from "react";
import classNames from "classnames";
import ApexChart from "react-apexcharts";

const Chart = (props) => {
   const {
      series,
      xaxis,
      type,
      title,
      options,
      className,
      chartHeaderClasses,
      isToolBar = false,
      ...otherProps
   } = props;

   const [chartOptions] = useState(options);

   const { chart = {}, ...otherOptions } = chartOptions ?? {};

   const chartBodyClassNames = classNames({
      chart__body: true,
      [className]: className,
   });

   const chartHeaderClassNames = classNames({
      chart__title: true,
      [chartHeaderClasses]: chartHeaderClasses,
   });

   return (
      <div className="chart">
         <div className={chartHeaderClassNames}>{title}</div>
         <div className={chartBodyClassNames}>
            <ApexChart
               options={{
                  chart: {
                     ...chart,
                     animations: { enabled: false },
                     toolbar: {
                        show: isToolBar,
                     },
                  },
                  dataLabels: { enabled: false },
                  xaxis,
                  ...otherOptions,
               }}
               series={series}
               type={type}
               {...otherProps}
            />
         </div>
      </div>
   );
};

export default Chart;

import React, { useEffect } from "react";
import { connect } from "react-redux";

// BASE COMPONENTS
import GridContainer from "components/grid-container/GridContainer.component";
import GridItem from "components/grid-item/GridItem.component";
import Chart from "components/chart/Chart.component";
import Table from "components/table/Table.component";
import IsVisible from "components/is-visible/IsVisible.component";
// EFFECTS
import useInput from "effects/useInput.effect";
// SERVICES
import StatisticsServices from "./statistics.services";
// ACTIONS
import {
   updateHistoryLog,
   resetHistoryLog,
} from "redux/statistics/statistics.actions";

const StatisticsPage = (props) => {
   const { updateHistoryLog, resetHistoryLog, historyLog } = props;

   const initState = {
      a10: 10,
      a20: 20,
      a30: 30,
      a40: 40,
      b10: 15,
      b20: 25,
      b30: 35,
      b40: 45,
      c10: 20,
      c20: 30,
      c30: 40,
      c40: 50,
      d10: 25,
      d20: 35,
      d30: 45,
      d40: 55,
   };

   const {
      inputState,
      handleInput,
      handleInvalidMessage,
      invalidMessages,
      updateInputState,
   } = useInput({ ...initState });

   useEffect(() => {
      historyLog.forEach((item) => {
         updateInputState({ [item.name]: item.value });
      });
      //eslint-disable-next-line
   }, []);

   const { statisticsTableData, generateChartData } = StatisticsServices;
   const { xaxis, series } = generateChartData(inputState);

   const handleInputChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;

      updateHistoryLog({ name, value });

      handleInput(event);
   };

   const backToSpecificState = (hist) => {
      updateInputState({ [hist.name]: hist.value });
   };

   const onResetHistoryLog = () => {
      resetHistoryLog();
      updateInputState({ ...initState });
   };

   return (
      <section className="statistics-page">
         <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg={6}>
               <GridItem xs={12} sm={12} md={12} lg={12}>
                  <Table
                     tableHead={xaxis?.categories}
                     tableBody={statisticsTableData}
                     series={series}
                     formOptions={{
                        inputState,
                        invalidMessages,
                        handleInputChange,
                        handleInvalidMessage,
                     }}
                  />
               </GridItem>
               <GridItem xs={12} sm={12} md={12} lg={12}>
                  <Chart
                     type="bar"
                     xaxis={xaxis}
                     series={series}
                     title="Statistics"
                  />
               </GridItem>
            </GridItem>
            <GridItem xs={12} sm={12} md={3} lg={3}>
               <h2>History Log (only last 10 changes)</h2>
               <IsVisible isVisible={historyLog.length <= 0}>
                  <h4>Log Is Empty</h4>
               </IsVisible>
               <IsVisible isVisible={historyLog.length > 0}>
                  <div
                     className="statistics-page__history-item reset-button"
                     onClick={onResetHistoryLog}>
                     Reset History
                  </div>
                  {historyLog.map((hist, idx) => (
                     <div
                        className="statistics-page__history-item"
                        key={idx}
                        onClick={() => backToSpecificState(hist)}>
                        {hist?.name} : {hist?.value}
                     </div>
                  ))}
               </IsVisible>
            </GridItem>
         </GridContainer>
      </section>
   );
};

const mapStateToProps = (state) => {
   const { statistics } = state;
   return {
      historyLog: statistics.historyLog,
   };
};

const mapDispatchToProps = (dispatch) => ({
   updateHistoryLog: (history) => dispatch(updateHistoryLog(history)),
   resetHistoryLog: () => dispatch(resetHistoryLog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsPage);

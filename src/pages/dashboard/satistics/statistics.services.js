const StatisticsServices = {
   statisticsTableData: [
      [
         { id: 1, name: "a10", value: 10 },
         { id: 2, name: "a20", value: 20 },
         { id: 3, name: "a30", value: 30 },
         { id: 4, name: "a40", value: 40 },
      ],
      [
         { id: 1, name: "b10", value: 15 },
         { id: 2, name: "b20", value: 25 },
         { id: 3, name: "b30", value: 35 },
         { id: 4, name: "b40", value: 45 },
      ],
      [
         { id: 1, name: "c10", value: 20 },
         { id: 2, name: "c20", value: 30 },
         { id: 3, name: "c30", value: 40 },
         { id: 4, name: "c40", value: 50 },
      ],
      [
         { id: 1, name: "d10", value: 25 },
         { id: 2, name: "d20", value: 35 },
         { id: 3, name: "d30", value: 45 },
         { id: 4, name: "d40", value: 55 },
      ],
   ],
   generateChartData(inputState) {
      const xaxis = {
         categories: [10, 20, 30, 40],
      };
      const series = [
         {
            name: "a",
            data: [
               inputState.a10,
               inputState.a20,
               inputState.a30,
               inputState.a40,
            ],
         },
         {
            name: "b",
            data: [
               inputState.b10,
               inputState.b20,
               inputState.b30,
               inputState.b40,
            ],
         },
         {
            name: "c",
            data: [
               inputState.c10,
               inputState.c20,
               inputState.c30,
               inputState.c40,
            ],
         },
         {
            name: "d",
            data: [
               inputState.d10,
               inputState.d20,
               inputState.d30,
               inputState.d40,
            ],
         },
      ];
      return { xaxis, series };
   },
};

export default StatisticsServices;

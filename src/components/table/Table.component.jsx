import React from "react";

// BASE COMPONENTS
import Input from "components/input/Input.component";
import IsVisible from "components/is-visible/IsVisible.component";

const Table = (props) => {
   const {
      tableHead,
      tableBody,
      formOptions = {},
      editable = true,
      ...rest
   } = props;
   const { series } = rest;
   const {
      inputState,
      invalidMessages,
      handleInputChange,
      handleInvalidMessage,
   } = formOptions;

   return (
      <table>
         {tableHead && (
            <thead>
               <tr>
                  <th />
                  {tableHead.map((item, headIdx) => (
                     <th key={headIdx}>{item}</th>
                  ))}
               </tr>
            </thead>
         )}
         {tableBody && (
            <tbody>
               {tableBody.map((rows, rowsIdx) => (
                  <tr key={rowsIdx}>
                     <td>{series[rowsIdx].name}</td>
                     {rows.map((item) => (
                        <td key={item.id}>
                           <IsVisible isVisible={editable}>
                              <Input
                                 name={item.name}
                                 value={inputState[item.name]}
                                 error={invalidMessages}
                                 onChange={handleInputChange}
                                 onInvalid={handleInvalidMessage}
                                 type="number"
                              />
                           </IsVisible>
                           <IsVisible isVisible={!editable}>
                              <span>{item?.value}</span>
                           </IsVisible>
                        </td>
                     ))}
                  </tr>
               ))}
            </tbody>
         )}
      </table>
   );
};

export default Table;

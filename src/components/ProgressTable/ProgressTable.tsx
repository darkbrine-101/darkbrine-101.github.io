import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import styles from './ProgressTable.module.css'

interface Props {
    TableData: Array<{
        Name: string,
        Progress: number
    }>
}
let ProgressTable = ({ TableData }: Props) => {
    let Max = 0;
    for (let i = 0; i < TableData.length; ++i) {
        if (Max < TableData[i].Progress) {
            Max = TableData[i].Progress
        }
    }
    
    

  return (
      <div className={styles.BG}>
          {
            TableData.map(TableData => (
                <React.Fragment key={TableData.Name}>
                    <div className={styles.Top}>
                        <div className={styles.Text}>{TableData.Name}</div>
                        <div className={styles.Text}>{TableData.Progress} Years</div>
                    </div>
                    <ProgressBar Value={TableData.Progress} Max ={Max} />
                </React.Fragment>
            ))
          }
      </div>
  );
}

export default ProgressTable;
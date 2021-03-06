import React, { useState } from 'react'
import { taskListTomorrow } from "../../../../utils/Utils";
import TaskListItem from './TaskListItem';


const TaskListToday = () => {

    const noOfDatasInTable = 5;
    const noOfPages = parseInt(taskListTomorrow.length / noOfDatasInTable);

    const [page, setPage] = useState(0);

    const dataInTable = taskListTomorrow.slice(
        page * noOfDatasInTable,
        page * noOfDatasInTable + noOfDatasInTable
    );

    return (
        <div>
            <TaskListItem  dataInTable={dataInTable}/>
            <div className="pagination">
                <div
                    className="pagination__prev"
                    onClick={() => {
                        if (page > 0) {
                            setPage(page - 1);
                        }
                    }}
                >
                    Previous
                </div>
                <div className="pagination__pages">
                    <ul>
                        {Array(noOfPages + 1)
                            .fill("")
                            .map((d, index) => (
                                <li
                                    key={index + "sjlk"}
                                    className={`pagination__page ${
                                        index === page ? `pagination__page--active` : null
                                        }`}
                                    onClick={() => {
                                        setPage(index);
                                    }}
                                >
                                    {index + 1}
                                </li>
                            ))}
                    </ul>
                </div>
                <div
                    className="pagination__next"
                    onClick={() => {
                        if (page < noOfPages) {
                            setPage(page + 1);
                        }
                    }}
                >
                    Next
                </div>
            </div>
        </div>
    )
}
export default TaskListToday;
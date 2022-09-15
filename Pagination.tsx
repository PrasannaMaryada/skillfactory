/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
import * as React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Pagination } from "react-bootstrap";

interface PaginationProps {
    statusPerPage: number;
    totalStatus: number;
    currentPage: number;
    paginate(pageNumber: number): any;
}

export const PaginationComponent = (props: PaginationProps) => {
    const { statusPerPage, totalStatus, currentPage, paginate } = props;
    // console.log(Math.ceil(totalStatus / statusPerPage));
    console.log("current - ", currentPage);
    return (
        <Pagination>
            <Pagination.First
                onClick={() => paginate(1)}
                disabled={currentPage <= 1}
            />
            <Pagination.Prev
                disabled={currentPage <= 1}
                onClick={() => paginate(currentPage - 1)}
            />
            <Pagination.Item>{currentPage}</Pagination.Item>
            <Pagination.Next
                onClick={() => paginate(currentPage + 1)}
                disabled={totalStatus <= currentPage}
            />
            <Pagination.Last
                disabled={totalStatus <= currentPage}
                onClick={() => paginate(Math.ceil(totalStatus / statusPerPage))}
            />
        </Pagination>
    );
};

export default PaginationComponent;

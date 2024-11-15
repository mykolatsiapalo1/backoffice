"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./table";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { ReactNode } from "react";
import { Button } from "./button";

type DataTableStyleProps = { rowClassName?: string };
interface DataTableProps<TData, TValue> extends DataTableStyleProps {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  wrapperClassName?: string;
  footerWrapperClassName?: string;
  noResultsContent?: ReactNode;
  onRowClick?: (row: TData) => void;
  headerRowClassName?: string;
  getPrevPage: () => void;
  getNextPage: () => void;
  isPrevPageDisabled: boolean;
  isNextPageDisabled: boolean;
  currPage: number;
  totalCount: number;
  limit: number;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  headerRowClassName,
  rowClassName,
  wrapperClassName,
  footerWrapperClassName,
  noResultsContent = "No results.",
  getPrevPage,
  getNextPage,
  onRowClick,
  isPrevPageDisabled,
  isNextPageDisabled,
  currPage = 0,
  totalCount = 0,
  limit = 10,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={cn("flex h-full w-full flex-col justify-between", wrapperClassName)}>
      <div className="rounded-2xl">
        <Table>
          <TableHeader className="dark:text-gray-450 bg-gray-50 dark:bg-[#1A1A1A80]/50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className={headerRowClassName}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="dark:text-gray-700">
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={cn("dark:text-[#525252]", rowClassName)}
                  onClick={() => onRowClick?.(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-gray-450 h-24 text-center">
                  {noResultsContent}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className={cn("flex flex-row items-center justify-between py-4", footerWrapperClassName)}>
        <div className="flex gap-5">
          <span className="text-sm text-gray-500">
            Page {currPage + 1} of {Math.ceil(totalCount / limit)}
          </span>
          <span className="text-sm text-gray-500">
            Showing {table.getRowModel().rows.length} of {totalCount}
          </span>
        </div>
        <div className="flex gap-2 md:mt-0">
          <Button
            className="shadow-darkShadow h-[32px] w-[32px] bg-white p-2 dark:bg-[#1A1A1A99]/60"
            onClick={getPrevPage}
            disabled={isPrevPageDisabled}
          >
            <Icon icon="ph:arrow-left" className="text-base-black" fontSize={16} />
          </Button>
          <Button
            className="shadow-darkShadow h-[32px] w-[32px] bg-white p-2 dark:bg-[#1A1A1A99]/60"
            onClick={getNextPage}
            disabled={isNextPageDisabled}
          >
            <Icon icon="ph:arrow-right" className="text-base-black" fontSize={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}

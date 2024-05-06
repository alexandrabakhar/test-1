import { Table as MantineTable } from '@mantine/core'
import { flexRender, useReactTable } from '@tanstack/react-table'
import './index.css'

type TableProperties<T> = {
  tableInstance: ReturnType<typeof useReactTable<T>>
}

export const Table = <T,>({ tableInstance }: TableProperties<T>) => {
  return (
    <MantineTable highlightOnHover withTableBorder withColumnBorders>
      <MantineTable.Thead>
        {tableInstance.getHeaderGroups().map(headerGroup => (
          <MantineTable.Tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <MantineTable.Th
                key={header.id}
                style={{
                  width: header.getSize(),
                  position: 'relative',
                }}
              >
                {header.isPlaceholder ? null : (
                  <div
                    {...{
                      onClick: header.column.getToggleSortingHandler(),
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}

                    {{
                      asc: ' 🔼',
                      desc: ' 🔽',
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                )}

                <div
                  {...{
                    onDoubleClick: () => header.column.resetSize(),
                    onMouseDown: header.getResizeHandler(),
                    onTouchStart: header.getResizeHandler(),
                    className: `resizer ${
                      tableInstance.options.columnResizeDirection
                    } ${header.column.getIsResizing() ? 'isResizing' : ''}`,
                    style: {
                      transform: header.column.getIsResizing()
                        ? `translateX(1px)`
                        : '',
                    },
                  }}
                />
              </MantineTable.Th>
            ))}
          </MantineTable.Tr>
        ))}
      </MantineTable.Thead>
      <MantineTable.Tbody>
        {tableInstance.getRowModel().rows.map(row => (
          <MantineTable.Tr key={row.id}>
            {row.getVisibleCells().map(cell => (
              <MantineTable.Td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </MantineTable.Td>
            ))}
          </MantineTable.Tr>
        ))}
      </MantineTable.Tbody>
    </MantineTable>
  )
}

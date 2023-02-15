import React from 'react'
import DelIcon from '../../Assets/Delete.png'
import EditIcon from '../../Assets/Edit.png'
import { StyledTable } from './style'

export default function Table() {

  return (
    <StyledTable>
        <tr>
          <th>Report 1</th>
          <th>Report 2</th>
          <th>Report 3</th>
          <th>Report 4</th>
          <th>Report 5</th>
          <th>Report 5</th>
          <th>Report 6</th>
          <th>actions</th>
        </tr>
        <tr>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>
            <div className='icons-div'>
            <img src={EditIcon} alt='edit'/>
            <img src={DelIcon} alt='delete'/>
            </div>
          </td>
        </tr>
        <tr>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>
            <div className='icons-div'>
            <img src={EditIcon} alt='edit'/>
            <img src={DelIcon} alt='delete'/>
            </div>
          </td>
        </tr>
        <tr>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>
            <div className='icons-div'>
            <img src={EditIcon} alt='edit'/>
            <img src={DelIcon} alt='delete'/>
            </div>
          </td>
        </tr>
        <tr>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>
            <div className='icons-div'>
            <img src={EditIcon} alt='edit'/>
            <img src={DelIcon} alt='delete'/>
            </div>
          </td>
        </tr>
        <tr>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>lorem ipsum</td>
          <td>
            <div className='icons-div'>
            <img src={EditIcon} alt='edit'/>
            <img src={DelIcon} alt='delete'/>
            </div>
          </td>
        </tr>
      </StyledTable>

  )
}
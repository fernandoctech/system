import React, {Component} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import api from '../../../../services/api';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

 async function createdata() {
  const response = await api.get(`/?consulta=buscar_produtos`);
  return response.data;
}
 function state(){

  return createdata().then(console.log(state));

 } 

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function CustomizedTables() {
  const classes = useStyles();
  const row = state();

  return (
    <TableContainer component={Paper}>
      <h1>{row.descricao}</h1>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Produtos</StyledTableCell>
            <StyledTableCell align="right">Fabricante</StyledTableCell>
            <StyledTableCell align="right">Estoque</StyledTableCell>
            <StyledTableCell align="right">30-d</StyledTableCell>
            <StyledTableCell align="right">90-d</StyledTableCell>
            <StyledTableCell align="right">Quantidade</StyledTableCell>
            <StyledTableCell align="right">P-Sugestão</StyledTableCell>
            <StyledTableCell align="right">P-entrada</StyledTableCell>
            <StyledTableCell align="right">P-venda</StyledTableCell>
            <StyledTableCell align="right">Margin Lucro</StyledTableCell>
            <StyledTableCell align="right">Ações</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow >
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>

            
        </TableBody>
      </Table>
    </TableContainer>
  );

}
export default CustomizedTables;
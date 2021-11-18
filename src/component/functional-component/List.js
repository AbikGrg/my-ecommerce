import{Table,Nav} from 'react-bootstrap';

const List=()=>{
    return <Table striped bordered hover variant="dark">
  
<thead align="left">
    <tr>
      <th>S.N</th>
      <th>catageory</th>
      
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><Nav.Link href="/electronicdevices">1</Nav.Link></td>
      <td>
        <Nav.Link href="/electronicdevices">Electronicdevice</Nav.Link>
    </td>
      
      
    </tr>
    <tr>
      <td><Nav.Link href="/property">2</Nav.Link></td>
      <td><Nav.Link href="/property">Property</Nav.Link></td>
     
      
    </tr>
    <tr>
      
      <td> <Nav.Link href="/clothes">3</Nav.Link></td>

      <td> <Nav.Link href="/clothes">Clothes</Nav.Link>
      </td>
     
    </tr>
    <tr>
      <td><Nav.Link href="/Sports">4</Nav.Link></td>
      <td><Nav.Link href="/Sports">Sports</Nav.Link></td>
      
      </tr>

  </tbody>
</Table>


}
export default List;
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function ProductTable({activeTab}) {

    function createData(name, calories) {
      return { name, calories};
    }
    
    const techinicalSpecifications = [
       { 
        name : "4 Wheeler Buggy",
        specs : [
            createData('Type Motor', "BLDC"),
            createData('Watt', 2000),
            createData('RPM', 3000),
            createData('Top Speed (KMPH)', "25-35"),
            createData('Peak Motor Torque (NM)', 24),
            createData('Peak Torque (at Wheel)', "Variable & O2 different size wheels"),
            createData('Battery'),
            createData('Type', 'lithium ion'),
            createData('Maximum Amp', '100AH'),
            createData('Maximum Voltage (Volts)', 72),
            createData('Charging Time', '6-7 hrs'),
            createData('Dimmensions'),
            createData('Dimmension L*B*H in MM', 2963*889*1800),
            createData('Wheel Base (MM)', 2370),
            createData('Ground Clearance (MM)', 160),
            createData('Vehicle Weight (kg)', 410),
            createData('Load Capacity (kg)', 500),
            createData('Body', 'FRP/Metal'),
            createData('Tyre Size', '3.75 R 12'),
            createData('Differential (inch)', 42),
            createData('Performance'),
            createData('Certified Range (Kms)', 85),
            createData('On Road Range (Kms)', 70),
            createData('Gradebility', '11%'),
            createData('Suspension & Breaks'),
            createData('Front', 'Rigid Axle Leaf Spring & hydraulic'),
            createData('Rear', 'Rigid Axle Leaf Spring & hydraulic'),
            createData('Brake', 'Front & Rear drum type'),
            createData('Parking Break', 'Mechanical Lever Type'),
          ]
        },
       { 
        name : "Goods Carrier",
        specs : [
            createData('Type Motor', "BLDC"),
            createData('Watt', 1000),
            createData('RPM', 3000),
            createData('Top Speed (KMPH)', "25-35"),
            createData('Peak Motor Torque (NM)', 14),
            createData('Peak Torque (at Wheel)', "Variable & O2 different size wheels"),
            createData('Battery'),
            createData('Type', 'Exide'),
            createData('Maximum Amp', '100AH'),
            createData('Maximum Voltage (Volts)', 48),
            createData('Charging Time', '6-7 hrs'),
            createData('Dimmensions'),
            createData('Dimmension L*B*H in MM', 2800*1000*1800),
            createData('Wheel Base (MM)', 2100),
            createData('Ground Clearance (MM)', 155),
            createData('Vehicle Weight (kg)', 350),
            createData('Load Capacity (kg)', 550),
            createData('Tyre Size', 'R 12'),
            createData('Differential (inch)', 35),
            createData('Track Width (MM)', 825),
            createData('Turning Radius (M)', 5),
            createData('Performance'),
            createData('Certified Range (Kms)', 90),
            createData('On Road Range (Kms)', 80),
            createData('Gradebility', '11%'),
            createData('Suspension & Breaks'),
            createData('Front', 'Suspension Helical Coil Spring'),
            createData('Rear', 'Rigid Axle Leaf Spring'),
            createData('Brake', 'Front & Rear drum type'),
            createData('Parking Break', 'Mechanical Lever Type'),
          ]
        },
       { 
        name : "Passenger",
        specs : [
            createData('Type Motor', "BLDC"),
            createData('Watt', 1000),
            createData('RPM', 3000),
            createData('Top Speed (KMPH)', "25-35"),
            createData('Peak Motor Torque (NM)', 14),
            createData('Peak Torque (at Wheel)', "Variable & O2 different size wheels"),
            createData('Battery'),
            createData('Type', 'Exide'),
            createData('Maximum Amp', '100AH'),
            createData('Maximum Voltage (Volts)', 48),
            createData('Charging Time', '6-7 hrs'),
            createData('Dimmensions'),
            createData('Dimmension L*B*H in MM', 2800*1000*1800),
            createData('Wheel Base (MM)', 2207),
            createData('Ground Clearance (MM)', 250),
            createData('Vehicle Weight (kg)', 350),
            createData('Load Capacity (kg)', 400),
            createData('Tyre Size', 'R 12'),
            createData('Differential (inch)', 35),
            createData('Track Width (MM)', 825),
            createData('Turning Radius (M)', 5),
            createData('Performance'),
            createData('Certified Range (Kms)', 90),
            createData('On Road Range (Kms)', 80),
            createData('Gradebility', '11%'),
            createData('Suspension & Breaks'),
            createData('Front', 'Suspension Helical Coil Spring'),
            createData('Rear', 'Rigid Axle Leaf Spring'),
            createData('Brake', 'Front & Rear drum type'),
            createData('Parking Break', 'Mechanical Lever Type'),
          ]
        },
       { 
        name : "Loader Van",
        specs : [
            createData('Type Motor', "BLDC"),
            createData('Watt', 1200),
            createData('RPM', 3000),
            createData('Top Speed (KMPH)', "30"),
            createData('Peak Motor Torque (NM)', 18),
            createData('Peak Torque (at Wheel)', "Variable & O2 different size wheels"),
            createData('Battery'),
            createData('Type', 'Exide'),
            createData('Maximum Amp', '130AH'),
            createData('Maximum Voltage (Volts)', 48),
            createData('Charging Time', '6-7 hrs'),
            createData('Dimmensions'),
            createData('Dimmension L*B*H in MM', 1500*1200*1200),
            createData('Wheel Base (MM)', 2107),
            createData('Ground Clearance (MM)', 160),
            createData('Vehicle GVW (kg)', 560),
            createData('Body', 'Metal'),
            createData('Tyre Size', '3.00- R 12'),
            createData('Differential (inch)', 35),
            createData('Track Width (MM)', 825),
            createData('Turning Radius (M)', 5),
            createData('Performance'),
            createData('Certified Range (Kms)', 120),
            createData('On Road Range (Kms)', 90),
            createData('Gradebility', '11%'),
            createData('Suspension & Breaks'),
            createData('Front', 'Suspension Helical Coil Spring'),
            createData('Rear', 'Rigid Axle Leaf Spring'),
            createData('Brake', 'Front & Rear drum type'),
            createData('Parking Break', 'Mechanical Lever Type'),
          ]
        },
       { 
        name : "Food Van",
        specs : [
            createData('Type Motor', "BLDC"),
            createData('Watt', 1000),
            createData('RPM', 3000),
            createData('Top Speed (KMPH)', "25-30"),
            createData('Peak Motor Torque (NM)', 14),
            createData('Peak Torque (at Wheel)', "Variable & O2 different size wheels"),
            createData('Battery'),
            createData('Type', 'Exide'),
            createData('Maximum Amp', '100AH'),
            createData('Maximum Voltage (Volts)', 48),
            createData('Charging Time', '6-7 hrs'),
            createData('Dimmensions'),
            createData('Dimmension L*B*H in MM', 2800*1000*1800),
            createData('Wheel Base (MM)', 2100),
            createData('Ground Clearance (MM)', 155),
            createData('Vehicle Weight (kg)', 350),
            createData('Load Capacity (kg)', 550),
            createData('Tyre Size', 'R 12'),
            createData('Differential (inch)', 35),
            createData('Track Width (MM)', 825),
            createData('Turning Radius (M)', 5),
            createData('Performance'),
            createData('Certified Range (Kms)', 90),
            createData('On Road Range (Kms)', 80),
            createData('Gradebility', '11%'),
            createData('Suspension & Breaks'),
            createData('Front', 'Suspension Helical Coil Spring'),
            createData('Rear', 'Rigid Axle Leaf Spring'),
            createData('Brake', 'Front & Rear drum type'),
            createData('Parking Break', 'Mechanical Lever Type'),
          ]
        },
       { 
        name : "Garbage Van",
        specs : [
            createData('Type Motor', "BLDC"),
            createData('Watt', 1000),
            createData('RPM', 3000),
            createData('Top Speed (KMPH)', "25-30"),
            createData('Peak Motor Torque (NM)', 14),
            createData('Peak Torque (at Wheel)', "Variable & O2 different size wheels"),
            createData('Battery'),
            createData('Type', 'Exide'),
            createData('Maximum Amp', '100AH'),
            createData('Maximum Voltage (Volts)', 48),
            createData('Charging Time', '6-7 hrs'),
            createData('Dimmensions'),
            createData('Dimmension L*B*H in MM', 2800*1000*1800),
            createData('Wheel Base (MM)', 2100),
            createData('Ground Clearance (MM)', 155),
            createData('Vehicle Weight (kg)', 350),
            createData('Load Capacity (kg)', 550),
            createData('Tyre Size', 'R 12'),
            createData('Differential (inch)', 35),
            createData('Track Width (MM)', 825),
            createData('Turning Radius (M)', 5),
            createData('Performance'),
            createData('Certified Range (Kms)', 90),
            createData('On Road Range (Kms)', 80),
            createData('Gradebility', '11%'),
            createData('Suspension & Breaks'),
            createData('Front', 'Suspension Helical Coil Spring'),
            createData('Rear', 'Rigid Axle Leaf Spring'),
            createData('Brake', 'Front & Rear drum type'),
            createData('Parking Break', 'Mechanical Lever Type'),
          ]
        },
       { 
        name : "Exihibition Van",
        specs : [
            createData('Type Motor', "BLDC"),
            createData('Watt', 1800),
            createData('RPM', 3000),
            createData('Top Speed (KMPH)', "25-30"),
            createData('Peak Motor Torque (NM)', 14),
            createData('Peak Torque (at Wheel)', "Variable & O2 different size wheels"),
            createData('Battery'),
            createData('Type', 'Exide'),
            createData('Maximum Amp', '100AH'),
            createData('Maximum Voltage (Volts)', 48),
            createData('Charging Time', '6-7 hrs'),
            createData('Dimmensions'),
            createData('Dimmension L*B*H in MM', 2800*1000*1800),
            createData('Wheel Base (MM)', 2100),
            createData('Ground Clearance (MM)', 155),
            createData('Vehicle Weight (kg)', 350),
            createData('Load Capacity (kg)', 550),
            createData('Tyre Size', 'R 12'),
            createData('Differential (inch)', 42),
            createData('Track Width (MM)', 825),
            createData('Turning Radius (M)', 5),
            createData('Performance'),
            createData('Certified Range (Kms)', 90),
            createData('On Road Range (Kms)', 80),
            createData('Gradebility', '11%'),
            createData('Suspension & Breaks'),
            createData('Front', 'Suspension Helical Coil Spring'),
            createData('Rear', 'Rigid Axle Leaf Spring'),
            createData('Brake', 'Front & Rear drum type'),
            createData('Parking Break', 'Mechanical Lever Type'),
          ]
        },
       { 
        name : "Ambulance",
        specs : [
            createData('Type Motor', "BLDC"),
            createData('Watt', 1800),
            createData('RPM', 3000),
            createData('Top Speed (KMPH)', "25-30"),
            createData('Peak Motor Torque (NM)', 14),
            createData('Peak Torque (at Wheel)', "Variable & O2 different size wheels"),
            createData('Battery'),
            createData('Type', 'Exide'),
            createData('Maximum Amp', '100AH'),
            createData('Maximum Voltage (Volts)', 48),
            createData('Charging Time', '6-7 hrs'),
            createData('Dimmensions'),
            createData('Dimmension L*B*H in MM', 2800*1000*1800),
            createData('Wheel Base (MM)', 2100),
            createData('Ground Clearance (MM)', 155),
            createData('Vehicle Weight (kg)', 350),
            createData('Load Capacity (kg)', 550),
            createData('Tyre Size', 'R 12'),
            createData('Differential (inch)', 42),
            createData('Track Width (MM)', 825),
            createData('Turning Radius (M)', 5),
            createData('Performance'),
            createData('Certified Range (Kms)', 90),
            createData('On Road Range (Kms)', 80),
            createData('Gradebility', '11%'),
            createData('Suspension & Breaks'),
            createData('Front', 'Suspension Helical Coil Spring'),
            createData('Rear', 'Rigid Axle Leaf Spring'),
            createData('Brake', 'Front & Rear drum type'),
            createData('Parking Break', 'Mechanical Lever Type'),
          ]
        },
       { 
        name : "School Van",
        specs : [
            createData('Type Motor', "BLDC"),
            createData('Watt', 1800),
            createData('RPM', 3000),
            createData('Top Speed (KMPH)', "25-30"),
            createData('Peak Motor Torque (NM)', 14),
            createData('Peak Torque (at Wheel)', "Variable & O2 different size wheels"),
            createData('Battery'),
            createData('Type', 'Exide'),
            createData('Maximum Amp', '100AH'),
            createData('Maximum Voltage (Volts)', 48),
            createData('Charging Time', '6-7 hrs'),
            createData('Dimmensions'),
            createData('Dimmension L*B*H in MM', 2800*1000*1800),
            createData('Wheel Base (MM)', 2100),
            createData('Ground Clearance (MM)', 155),
            createData('Vehicle Weight (kg)', 350),
            createData('Load Capacity (kg)', 550),
            createData('Tyre Size', 'R 12'),
            createData('Differential (inch)', 42),
            createData('Track Width (MM)', 825),
            createData('Turning Radius (M)', 5),
            createData('Performance'),
            createData('Certified Range (Kms)', 90),
            createData('On Road Range (Kms)', 80),
            createData('Gradebility', '11%'),
            createData('Suspension & Breaks'),
            createData('Front', 'Suspension Helical Coil Spring'),
            createData('Rear', 'Rigid Axle Leaf Spring'),
            createData('Brake', 'Front & Rear drum type'),
            createData('Parking Break', 'Mechanical Lever Type'),
          ]
        },
    ];
    
    const rows = techinicalSpecifications.filter((item) => item.name === activeTab)[0].specs;
    // console.log("Rows Data - ", rows);
  return (
    <TableContainer component={Paper} className='p-2 md:max-w-6xl'>
      <Table  size="small" aria-label="a dense table"   >
        <TableHead>
          <TableRow>
            <TableCell >Motor</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

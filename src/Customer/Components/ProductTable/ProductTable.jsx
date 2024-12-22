import  React, {useEffect} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Oval } from 'react-loader-spinner';
import Loader from '../Loader/Loader';

export default function ProductTable({ activeTab }) {
  const [vehiclesData, setVehiclesData] = React.useState(null);

  useEffect(() => {
    const cachedData = sessionStorage.getItem("vehiclesSpecsData");
  
    if (cachedData) {
      setVehiclesData(JSON.parse(cachedData));
    } else {
      fetchE_VehiclesData();
    }
  }, []);
  
  async function fetchE_VehiclesData() {
    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxI-cslLCes1w3zzGuII1X60hb8VdVbI-Ut0IXKNAR0WcGUzRSC2aSTt9gWbg6KfEyS/exec?sheet=E_Vehicle_Techincal_Specs"
      );
      const data = await res.json();
      const newData = transformData(data);
  
      setVehiclesData(newData);
      sessionStorage.setItem("vehiclesSpecsData", JSON.stringify(newData)); // Save to sessionStorage
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  function transformData(data) {
    const result = [];
  
    data.forEach((item) => {
      const cleanedName = item.name.replace(/"/g, "");
  
      let vehicle = result.find((v) => v.name === cleanedName);
  
      if (!vehicle) {
        vehicle = {
          name: cleanedName,
          specs: [],
        };
        result.push(vehicle);
      }
  
      vehicle.specs.push({ key: item.key, value: item.value });
    });
  
    return result;
  }
  
  React.useEffect(() => {
    Aos.init({ once: true });
  }, []);
  
  const rows = vehiclesData
    ?.filter((item) => item.name === activeTab)[0]
    ?.specs;
  
  console.log("Vehicles Data = ", vehiclesData);
  

  return (
    <div>
      {rows ? (
        <TableContainer
          data-aos="flip-left"
          component={Paper}
          className="p-2 md:max-w-6xl"
        >
          <Table size="medium" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "1.15rem" }}>Motor</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows?.map((row) => (
                <TableRow
                  key={row.key}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontSize: "1.15rem" }}
                  >
                    {row.key}
                  </TableCell>

                  <TableCell align="left" sx={{ fontSize: "1.05rem" }}>
                    {row.value.toString().replace(/"/g, "")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Loader />
      )}
    </div>
  );
}


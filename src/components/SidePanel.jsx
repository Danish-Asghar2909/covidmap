import React, { useState } from 'react';
import { Paper, Typography, FormControl, InputLabel, Select, MenuItem, Button, Grid, Card, CardContent } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { PieChart } from '@mui/x-charts/PieChart';

function SidePanel() {
  const countries = useSelector((state) => state.filter.allRegion);
  const contriesDetails = useSelector((state) => state.filter.countriesDetails);
  const [chartData, setChartData] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [ selectedCountry , setSelectedCountry ] = useState('');

  function formatNumber(number) {
    const suffixes = ['', 'K', 'M', 'B'];
    let magnitude = Math.floor(Math.log10(number) / 3);
    let suffix = suffixes[magnitude];
    let shortNumber = (number / Math.pow(1000, magnitude)).toFixed(1);
    return `${shortNumber}${suffix}`;
  }

  const filterDataForChart = (region) => {
    const selectedDetails = contriesDetails.find((item) => item.country === region);
    const { infected, deceased, tested , country} = selectedDetails;
    const newData = [
      { id: 0, value: infected, label: 'Infected' },
      { id: 1, value: deceased, label: 'Deceased' },
      { id: 2, value: tested, label: 'Tested' },
    ];
    setSelectedCountry(country)
    setChartData(newData);
  };

  const handleFilterButtonClick = () => {
    filterDataForChart(selectedRegion);
    setSelectedRegion('')
    setSelectedMonth('')
    setSelectedType('')
  };

  return (
    <Paper style={{ padding: '20px' }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel id="region-filter-label">Region</InputLabel>
        <Select
          labelId="region-filter-label"
          id="region-filter"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {countries?.map((item) => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="month-filter-label">Month</InputLabel>
        <Select
          labelId="month-filter-label"
          id="month-filter"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {/* Month filter options */}
          <MenuItem key='jan' value="jan">January</MenuItem>
          <MenuItem key="feb" value="feb">February</MenuItem>
          <MenuItem key="mar" value="mar">March</MenuItem>
          <MenuItem key="apr" value="apr">April</MenuItem>
          <MenuItem key="may" value="may">May</MenuItem>
          <MenuItem key="jun" value="jun">June</MenuItem>
          <MenuItem key="jul" value="jul">July</MenuItem>
          <MenuItem key="aug" value="aug">August</MenuItem>
          <MenuItem key="sep" value="sep">September</MenuItem>
          <MenuItem key="oct" value="oct">October</MenuItem>
          <MenuItem key="nov" value="nov">November</MenuItem>
          <MenuItem key="dec" value="dec">December</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel id="type-filter-label">Type</InputLabel>
        <Select
          labelId="type-filter-label"
          id="type-filter"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          {/* Type filter options */}
          <MenuItem value="infected">Infected</MenuItem>
          <MenuItem value="deceased">Deceased</MenuItem>
          <MenuItem value="tested">Tested</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleFilterButtonClick}>
        Filter
      </Button>
      <h3>{selectedCountry}</h3>
      <Grid container spacing={3} style={{ marginTop: '20px' }}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h7" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h6" component="h2">
                {chartData && formatNumber(chartData[0].value)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h7" gutterBottom>
                Deceased
              </Typography>
              <Typography variant="h6" component="h2">
                {chartData && formatNumber(chartData[1].value)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="h7" gutterBottom>
                Tested
              </Typography>
              <Typography variant="h6" component="h2">
                {chartData && formatNumber(chartData[2].value)}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* Chart Component */}
      {chartData && (
        <div style={{ marginTop: '20px' }}>
          <PieChart
            series={[
              {
                data: chartData,
              },
            ]}
            width={300}
            height={150}
          />
        </div>
      )}
    </Paper>
  );
}

export default SidePanel;

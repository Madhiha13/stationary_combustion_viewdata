import React, { useState, useEffect } from 'react';


import {CartSvg,CircleSvg,WhitecartSvg,FilterSvg,Co2,FolderSvg,GreenSvg,LeftArrow,PiechartSvg,UserSvg,WhitevariationSvg } from "../assets";
const FinalList= () => {
  
  

    const [dataArray, setDataArray] = useState([]);
     const [selectedYear, setSelectedYear] = useState(''); 
     const [filteredData, setFilteredData] = useState([]);



  useEffect(() => {
    // Fetch data from the backend API
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/data');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setDataArray(data);
            setFilteredData(data); // Initially, display all data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
}, []);


    const yearRanges = [
        '2022-2023',
        '2021-2022',
        '2020-2021',
        '2019-2020',
        '2018-2019',
         '2017-2018',

      ];
      const handleYearChange = (event) => {
        const selected = event.target.value;
        setSelectedYear(selected);

        if (selected) {
            // Filter data based on the selected year
            const filtered = dataArray.filter(item => item.reportingYear === selected);
            setFilteredData(filtered);
        } else {
            // If no year is selected, show all data
            setFilteredData(dataArray);
        }
    };

    const hasMoreUsers = filteredData.length > 3;

      
      // const hasMoreUsers = dataArray.length > 3;


    
  return (
    <div className="mobile-combustion-list">
      <div className="rectangle-parent">
        <div className="frame-child" />
        <div className="white-variation-1-wrapper">
          <img
            className="white-variation-1"
            alt=""
            src={WhitevariationSvg}
          />
        </div>
        <div className="frame-wrapper">
          <div className="frame-parent">
            <div className="data-management-3-wrapper">
              <img
                className="data-management-3-icon"
                loading="lazy"
                alt=""
                src={FolderSvg}
              />
            </div>
            <div className="frame-group">
              <div className="data-management-2-wrapper">
                <img
                  className="data-management-2-icon"
                  loading="lazy"
                  alt=""
                  src={CircleSvg}
                />
              </div>
              <img
                  className="frame-input"
                  loading="lazy"
                  alt=""
                  src={GreenSvg}
                />
              <img
                  className="frame-input co2"
                  loading="lazy"
                  alt=""
                  src={Co2}
                />
            </div>
          </div>
        </div>
        <img className="frame-item" loading="lazy" alt="" src="/arrow-1.svg" />
        <div className="data-management-4-wrapper">
          <img
            className="data-management-4-icon"
            loading="lazy"
            alt=""
            src={PiechartSvg}
          />
        </div>
      </div>
      <main className="mobile-combustion-list-inner">
        <section className="frame-container">
          <div className="frame-div">
            <div className="left-arrow-in-circular-button-parent">
              <img
                className="left-arrow-in-circular-button-icon"
                loading="lazy"
                alt=""
                src={LeftArrow}
              />
              <div className="frame-parent1">
                <div className="frame-wrapper1">
                  <div className="frame-parent2">
                    <div className="reporting-year-wrapper">
                      <div className="reporting-year">Reporting Year</div>
                    </div>
                    <div className="dropdown-box">
                      <div className="">
                      
                        <div className="menu-label-wrapper">
                        
                          <div className="menu-label">
                          <select
                             value={selectedYear}
                             onChange={handleYearChange}
                              className="year-dropdown header"
                            >
                         <option value="">Reporting Year</option>
                            {yearRanges.map((year) => (
                                 <option key={year} value={year}>
                                       {year}
                         </option>
                        ))}
                        </select>
                            
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
                <div className="ellipse-parent">
                  <div className="frame-inner" />
                  <img
                    className="user-5-1"
                    loading="lazy"
                    alt=""
                    src={UserSvg}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-parent3">
            <div className="mobile-combustion-wrapper">
              <h1 className="mobile-combustion">STATIONARY COMBUSTION</h1>
            </div>
            <div className="mobile-combustion-view-data-child6" />
            <img className="cart-12-icon" alt="" src={WhitecartSvg}/>
            <div className="div15">1423</div>
            <div className="mtco2">MTCO2</div>
            <img
              className="filter-1-icon"
              loading="lazy"
              alt=""
              src={FilterSvg}
            />
            <footer className="frame-footer">
              <div className="frame-parent4">
                <div className="status-parent">
                
                  <b className="reporting-year1">MONTH</b>
                  <b className="responsibility">REPORTING YEAR</b>
                  <b className="facility">FACILITY</b>
                  <b className="emission-type">EMISSION TYPE</b>
                  <b className="fuel">FUEL</b>
                  <b className="quantity">QUANTITY</b>
                 <b className="units">UNITS</b>
                 <b className="emission">EMISSION</b>
                <b className="typeofvehicle">SOURCE</b>
                  <div className={`rectangle-group-container ${hasMoreUsers ? 'scrollable' : ''}`}>
                  <div>
                  {filteredData.map((item) => (
                  <div key={item.id} className="rectangle-group">
                    <div className="rectangle-div" />
                    <div className="frame-wrapper2">
                      <div className="frame-parent5">
                      <div className="checkbox">
                        <div className="checkbox-child" />
                      </div>
                        <div className="cart-2-parent">
                          <div className="cart-2" />
                          <img
                            className="cart-10-icon"
                            loading="lazy"
                            alt=""
                            src={CartSvg}
                          />
                        </div>                           
                        <div className="company-owned-vehicles-usage-wrapper">
                          <div className="company-owned-vehicles">
                          {item.emissionType}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="facility-1-wrapper">
                      <div className="facility-1">{item.facilty}</div>
                    </div>
                    <div className="manoj-wrapper">
                      <div className="manoj">{item.reportingYear}</div>
                    </div>
                    <div className="wrapper">
                      <div className="div">{item.month}</div>
                    </div>

                    <div className="frame-wrapper3">
                      <div className="rectangle-container">
                        <div className="frame-child1" >

                            {item.fuel}
                            
                        </div>
                       <div className="frame-child2" > {item.quantity}
                            </div>
                        <div className="frame-child3" >{item.units}</div>
                      </div>
                    </div>
                    <div className='emission-container'>
                       <div className='emission-quantity'>{item.emission}</div>
                       <div className="vehicle">{item.Source}</div>
                       <div className="edit-container">
 
                           <a href="#Edit" className="edit-link">Edit</a>
                       </div>

                    <div className="frame-child13" />
                     
                    </div>
                  </div>
                ))}

                  </div>
                  {hasMoreUsers && (
                            <div className="scroll-wrapper">
                                <div className="scroll-bar"></div>
                            </div>
                        )}
                  </div>
                </div>
                
              </div>

            </footer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FinalList;

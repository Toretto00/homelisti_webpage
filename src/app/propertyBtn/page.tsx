"use client"

import * as React from "react";
import Style from "./propertyBtn.module.scss"
import "../globals.css";
import Container from "@mui/material/Container"
import Box from "@mui/material/Box";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SellIcon from '@mui/icons-material/Sell';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useRouter } from "next/navigation";

const topSelect = [
    { label: 'Sell' },
    { label: 'Buy'},
    { label: 'Rent'},
]

const topPlace = [
    { label: 'Apartments' },
    { label: 'Commercial'},
    { label: 'Office'},
    { label: 'Restaurant'},
    { label: 'Studio Home'},
    { label: 'Villa'},
]
function PropertyBtn() { 
    const router = useRouter(); // Sử dụng useRouter

    const handleOptionChange = () => {
        router.push(`/propertyBtn/formInfo`);
    };
    return (
        <Box
            sx={{
                minHeight: {xs: "2430px", sm: "2330px", md: "1000px", lg: "1000px", xl: "1000px"},
                backgroundColor: "#eaf7f4",
                paddingTop: "86px"
            }}
        >   
           <Box
                className = {Style.breadcrumbBanner} 
           >
                <div className={Style.barContainer}>
                    <div className={Style.containerTitle}>
                        <>
                            <a href="/" style={{
                                color: "#878c9f",
                                textDecoration: "none",
                            }}>
                                Home
                            </a>
                            <ChevronRightIcon 
                                sx={{
                                    fontSize: "18px",
                                    marginRight:"7px",
                                    marginLeft:"7px"
                                }}
                            />
                        </>
                    </div>
                    <div className={Style.contactAddress}>
                       Post an Ad
                    </div>
                </div>
           </Box>
           
           <Box className = {Style.contentArea}>
              <Container className = {Style.container}>
                <Box className = {Style.mainForm}>
                    <div className = {Style.mainContent}>
                        <div className = {Style.pageContentInner}>
                            <div className = {Style.pageTitleWrap}>
                                <h2 className = {Style.pageTitle}>
                                    Post an Ad
                                </h2>
                            </div>

                            <div className = {Style.post2363}>
                                <div className = {Style.rtCl}>
                                    <div className = {Style.rtClMessage} role="alert">
                                        You have 30 free ads.
                                    </div>
                                </div>
                                <div className={Style.homeListingForm}>
                                    <Box className={Style.adTypeSelection}>
                                        <Box className = {Style.posSectionTitle}>
                                            <h3>
                                                <SellIcon sx={{
                                                    fontSize: "18px",
                                                    marginRight: "5px",
                                                    fontWeight: "600"
                                                }} />
                                                Select a type                
                                            </h3>
                                        </Box>
                                        <Box className = {Style.formGroup}>
                                            <label className = {Style.category}>
                                                Ad Type 
                                                <span className = {Style.requireStar}>
                                                    *
                                                </span>
                                            </label>
                                            <Autocomplete
                                              className={Style.comboBox}
                                              disablePortal
                                              id="combo-box-demo"
                                              options={topSelect}
                                              sx={{ width: 300 }}
                                              renderInput={(params) => <TextField {...params} label="Select a type" />}
                                            />
                                        </Box>
                                    </Box>

                                    <Box className={Style.adTypeSelection}>
                                        <Box className = {Style.posSectionTitle}>
                                            <h3>
                                                <SellIcon sx={{
                                                    fontSize: "18px",
                                                    marginRight: "5px",
                                                    fontWeight: "600"
                                                }} />
                                                Select a category               
                                            </h3>
                                        </Box>
                                        <Box className = {Style.formGroup}>
                                            <label className = {Style.category}>
                                                Category 
                                                <span className = {Style.requireStar}>
                                                    *
                                                </span>
                                            </label>
                                            <Autocomplete
                                              className={Style.comboBox}
                                              disablePortal
                                              id="combo-box-demo"
                                              options={topPlace}
                                              onChange={handleOptionChange}
                                              sx={{ width: 300 }}
                                              renderInput={(params) => <TextField {...params} label="Select a category" />}
                                            />
                                        </Box>
                                    </Box>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>               
              </Container>
           </Box>
        </Box>
    )
}

export default PropertyBtn;
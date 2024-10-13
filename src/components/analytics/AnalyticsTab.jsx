"use client";
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function AnalyticsTab({ setTabIndex }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTabIndex(newValue);
  };

  const handleDropdownChange = (event) => {
    const newIndex = parseInt(event.target.value, 10);
    setValue(newIndex);
    setTabIndex(newIndex);
  };

  return (
    <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: "background.paper" }}>
      <div className="hidden md:block">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Math" />
          <Tab label="Science" />
          <Tab label="History" />
          <Tab label="Geography" />
          <Tab label="English" />
          <Tab label="Computer Science" />
          <Tab label="Economics" />
        </Tabs>
      </div>

      <div className="block md:hidden">
        <select
          value={value}
          onChange={handleDropdownChange}
          className="w-full p-2 bg-white border rounded-md text-gray-700"
        >
          <option value={0}>Math</option>
          <option value={1}>Science</option>
          <option value={2}>History</option>
          <option value={3}>Geography</option>
          <option value={4}>English</option>
          <option value={5}>Computer Science</option>
          <option value={6}>Economics</option>
        </select>
      </div>
    </Box>
  );
}

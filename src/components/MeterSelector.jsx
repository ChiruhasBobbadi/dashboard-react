import React from "react";

import { Radio, Tabs } from "antd";
import { DEVICE_METER_TYPES } from "../constants";
const MeterSelector = ({ value, onChange }) => {
  return (
    <Radio.Group value={value} onChange={(e) => onChange(e.target.value)}>
      <Radio.Button value={DEVICE_METER_TYPES.ELECTRIC}>
        Electricity Meter
      </Radio.Button>
      <Radio.Button value={DEVICE_METER_TYPES.WATER}>Water Meter</Radio.Button>
    </Radio.Group>
  );
};

export default MeterSelector;

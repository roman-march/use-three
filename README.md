# use-calendar-hook

React Hook for ThreeJs

<div align="left">
	<img src="https://user-images.githubusercontent.com/52174128/64046842-a4eb3180-cb75-11e9-8d06-8541611f183f.gif" height="320" />
</div>

## Installation

```
npm install use-three --save
```

## Demo

[![Edit use-three](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/use-three)

## Usage

```javascript
import useCalendar from "use-three";

const Three = useThree({
  onLoad: ctx => {},
  onLoadProgress: (ctx, item, loaded, total) => {},
  onLoadError: (ctx, url) => {},
  onStart: ctx => {},
  onUpdate: ctx => {},
  onDestroy: ctx => {}
});

return <Three />;
```

## API

### Parameters

| Field     |    Type    | Description                                |
| --------- | :--------: | ------------------------------------------ |
| date      |   `date`   | Current date                               |
| day       |  `number`  | Current number of day                      |
| month     |  `string`  | Current month                              |
| year      |  `string`  | Current year                               |
| days      | `[Object]` | Days of current month                      |
| months    | `[Object]` | Months of current year                     |
| weeks     |  `Array`   | ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"] |
| nextDay   | `Function` | Change current day on next                 |
| prevDay   | `Function` | Change current day on previous             |
| nextMonth | `Function` | Change current month on next               |
| prevMonth | `Function` | Change current month on previous           |
| nextYear  | `Function` | Change current year on next                |
| prevYear  | `Function` | Change current year on previous            |
| setDate   | `Function` | Set new day                                |
| setMonth  | `Function` | Set new month                              |
| setYear   | `Function` | Set new year                               |

#### config

| Key           |   Type   | Description                                                                    |
| ------------- | :------: | ------------------------------------------------------------------------------ |
| startDate     |  `date`  | Start date                                                                     |
| endDate       |  `date`  | End date                                                                       |
| maxDate       |  `date`  | Option specifies the maximum/latest date (inclusively) allowed for selection   |
| minDate       |  `date`  | Option specifies the minimum/earliest date (inclusively) allowed for selection |
| disabledDays  | `[date]` | Inaccessible days of the week for selection                                    |
| disabledDates | `[date]` | Inaccessible dates for selection                                               |

## License

The files included in this repository are licensed under the MIT license.

# Analysis Chart

## Data

Extracted the countries and camps from the given records, filtered schools based on selected country and camp, accumulated duplicate month records to show total

## Files

| Folder            | Contains                                                            |
| ----------------- | ------------------------------------------------------------------- |
| \_\_tests\_\_     | All test files                                                      |
| components/common | Common components like chart and dropdown                           |
| components/\*     | All used components                                                 |
| constants         | Constants like months and some colors that are used in charts       |
| handlers          | useLocalization and useTheming hooks                                |
| i18n              | Configure internationalization and locale files                     |
| pages             | Pages like Main and Details that are managed by react-router        |
| redux             | Configured redux with 3 slices for countries, camps and schools     |
| styles            | Common css for light and dark themes                                |
| types             | Common interfaces                                                   |
| utils             | Helper functions like groupBy method to group items by specific key |

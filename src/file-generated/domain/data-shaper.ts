export class DataShaper {
  shape(rawData: any[]): any[] {
    return rawData.map(item => ({
      id: item.id,
      label: item.name,
      value: item.value
    }));
  }
}

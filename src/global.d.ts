declare module "*.json" {
  interface MyJsonData {
    name: string;
    age: number;
    isActive: boolean;
  }

  const value: MyJsonData;
  export default value;
}

import { Input } from '@/components/ui/input'; // Adjust the import path based on your project structure

export function Search() {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  );
}

export default Search;

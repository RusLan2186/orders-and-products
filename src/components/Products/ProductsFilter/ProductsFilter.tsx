import './ProductsFilter.scss';

interface ProductsFilterProps {
  types: string[];
  selectedType: string;
  onChange: (type: string) => void;
}

export const ProductsFilter = ({ types, selectedType, onChange }: ProductsFilterProps) => {
  return (
    <div className="products-filter">
      <span className="products-filter__label">Type:</span>
      <select
        className="products-filter__select"
        value={selectedType}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};
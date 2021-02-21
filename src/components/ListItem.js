import ConditionalWrapper from "./ConditionalWrapper"

function ListItem({ item, rounded }) {
  return (
    <div className="flex items-center">
      <img
        src={item.image}
        style={{ verticalAlign: "middle" }}
        className={`h-14 w-14 lg:w-8 lg:h-8 ${rounded ? "rounded-full" : ""}`}
      />
      <ConditionalWrapper
        condition={item.url}
        wrapper={(children) => (
          <a
            className="cursor-pointer"
            href={item.url}
            target="no_blank"
            rel="noopener"
          >
            {children}
          </a>
        )}
      >
        <p className="hidden ml-2 text-base lg:block text-gray-light hover:text-white 2xl:text-lg">
          {item.name}
        </p>
      </ConditionalWrapper>
    </div>
  );
}

export default ListItem;

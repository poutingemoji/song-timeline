import ConditionalWrapper from "./ConditionalWrapper";

function ListItem({ item, rounded }) {
  return (
    <div className="flex flex-row items-center">
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
        <div className="inline-flex hover:text-white text-gray-light">
          <img
            src={item.image}
            style={{ verticalAlign: "middle" }}
            className={`h-14 w-14 lg:w-8 lg:h-8 ${
              rounded ? "rounded-full" : ""
            }`}
          />
          <p className="hidden ml-2 text-base lg:block 2xl:text-lg">
            {item.name}
          </p>
        </div>
      </ConditionalWrapper>
    </div>
  );
}

export default ListItem;

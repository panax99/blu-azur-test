import type { ActivityItemType } from "../../types/activity-type";

interface ActivityItemProps {
  item: ActivityItemType;
}

const ActivityItem = ({ item }: ActivityItemProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-white w-28 h-28 flex items-center justify-center overflow-hidden rounded-full relative">
        <img
          src={item.iconUrl}
          className="bg-contain w-14 h-14"
          alt="activityImg"
        />
      </div>
      <p className="text-center w-28 font-bold">{item.text}</p>
    </div>
  );
};

export default ActivityItem;

import Ellipsis from 'react-ellipsis-component';
import { Flipped } from 'react-flip-toolkit';
import { NavLink } from 'react-router';

interface Props {
  series: {
    id: string;
    thumbnailUrl: string;
    title: string;
  };
}

export const SeriesItem = ({ series }: Props) => {
  return (
    <NavLink
      viewTransition
      className="hover:opacity-75 block w-full cursor-pointer overflow-hidden"
      to={`/series/${series.id}`}
    >
      {({ isTransitioning }) => {
        return (
          <>
            <div className="relative overflow-hidden rounded-[8px] border-[2px] border-solid border-[#FFFFFF1F]">
              <Flipped stagger flipId={isTransitioning ? `series-${series.id}` : 0}>
                <img alt="" className="h-auto w-full" src={series.thumbnailUrl} />
              </Flipped>
            </div>
            <div className="p-[8px]">
              <div className="text-[14px] font-bold text-[#ffffff]">
                <Ellipsis ellipsis reflowOnResize maxLine={2} text={series.title} visibleLine={2} />
              </div>
            </div>
          </>
        );
      }}
    </NavLink>
  );
};

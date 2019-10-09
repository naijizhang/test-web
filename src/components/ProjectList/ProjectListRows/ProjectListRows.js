import React from 'react';
import '../index.scss';
import tileData from '../tileData';
import GithubBtn from '../../GithubBtn';

const ProjectRow = props => {
  return (
    <div key={props.id} className="direction row">
      <div className="info-wrapper">
        <h2 className="project-title">{props.title}</h2>
        <p className="description">{props.info}</p>
        <p className="tech">{props.tech}</p>
        <GithubBtn link={props.link} />
      </div>

      <div className="img-wrapper">
        <img src={props.img} alt={props.title} className={props.class} />
      </div>
    </div>
  );
};

const ProjectReverse = props => {
  return (
    <div key={props.id} className="direction-rev row">
      <div className="info-wrapper">
        <h2 className="project-title">{props.title}</h2>
        <p className="description">{props.info}</p>
        <p className="tech">{props.tech}</p>
        <GithubBtn link={props.link} />
      </div>

      <div className="img-wrapper">
        <img src={props.img} alt={props.title} className={props.class} />
      </div>
    </div>
  );
};

function TitlebarGridList() {
  return (
    <div className="list-container">
      {tileData.map(tile => (
        <div key={tile.id} className="item-container">
          {tile.title === 'Aurel Systems Inc.' ? (
            <ProjectReverse
              id={tile.id}
              title={tile.title}
              info={tile.description}
              tech={tile.tech}
              link={tile.github}
              img={tile.img}
              class="project-img"
            />
          ) : null}

          {tile.title === 'Monkiri Mobile App' ? (
            <ProjectRow
              id={tile.id}
              title={tile.title}
              info={tile.description}
              tech={tile.tech}
              link={tile.github}
              img={tile.img}
              class="msb"
            />
          ) : null}

          {tile.title === 'R10' ? (
            <ProjectReverse
              id={tile.id}
              title={tile.title}
              info={tile.description}
              tech={tile.tech}
              link={tile.github}
              img={tile.img}
              class="r10-img"
            />
          ) : null}

          {tile.title === 'Mash' ? (
            <ProjectRow
              id={tile.id}
              title={tile.title}
              info={tile.description}
              tech={tile.tech}
              link={tile.github}
              img={tile.img}
              class="boomtown-img"
            />
          ) : null}

          {tile.title === 'Boomtown' ? (
            <ProjectReverse
              id={tile.id}
              title={tile.title}
              info={tile.description}
              tech={tile.tech}
              link={tile.github}
              img={tile.img[0]}
              class="boomtown-img"
            />
          ) : null}

          {tile.title === 'Sport on Campus' ? (
            <ProjectRow
              id={tile.id}
              title={tile.title}
              info={tile.description}
              tech={tile.tech}
              link={tile.github}
              img={tile.img}
              class="project-img"
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default TitlebarGridList;

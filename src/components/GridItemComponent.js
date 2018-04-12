import React, { Component } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import PropTypes from 'prop-types'

const styles = {
    root: {
    },
    gridList: {
        alignContent: 'center',
        display: 'flex',
        flexWrap: 'wrap',
        height: "100%",
        overflowY: 'auto',
        justifyContent: 'center',
    },


};

const GridItemComponent = ({ items, click, selectedItem } = this.props) => {
    return (
        <div>
            {items.length > 0 && (
                <GridList
                    cellHeight={360}
                    cellWidth={180}
                    style={styles.gridList} cols={2.2}>
                    {items.map((item) => (
                        <GridTile key={item.name}
                            title={item.name}
                            actionIcon={<IconButton onClick={() => alert('Clicked at Star')}><StarBorder color="rgb(0,188,212)" /></IconButton>}
                            titleStyle={styles.titleStyle}
                            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)">
                            <img src={item.owner.avatar_url} onClick={() => selectedItem(item.id)} alt="" />
                        </GridTile>

                    ))}
                </GridList>
            )}

            <div>
                {items.length === 0 && (
                    <p>Está vazio</p>
                )}
            </div>
        </div>
    )
}

GridItemComponent.propTypes = {
    items: PropTypes.array.isRequired,
    click: PropTypes.func,
    selectedItem: PropTypes.func.isRequired
}

export default GridItemComponent
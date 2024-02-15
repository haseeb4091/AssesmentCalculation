import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor:"white",
    },
    nodeButton: {
        borderWidth: 1,
        borderColor: "black",
        padding: 6,
        borderRadius: 7,
        marginBottom: 5,
        fontSize: 13,
        height: 70,
        justifyContent: 'center', // Vertically center the content
    },
    buttonText: {
        color: '#000', // Example text color
        fontSize: 16, // Example font size
        textAlign: 'center', 
    },
});

const TreeView = ({ data, onNodeClick }) => {
    return (
        <View>
            {data.children && data.children.length > 0 && (
                <View>
                    {data.children.map((child, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => onNodeClick(child)}
                            style={styles.nodeButton}
                        >
                            <Text style={styles.buttonText}>{child.label}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            )}
        </View>
    );
};

const TreeScreen = ({navigation}) => {
// const TreeScreen = () => {

    // Your tree data
    const treeData = {
        label: 'What data are available?',
        children: [
            {
                label: 'Only short-term (L(E)C50) from 3 trophic levels',
                children: [
                    {
                        label: 'Use an assessment factor of 1000 on lowest value',
                    },
                ],
            },
            {
                label: 'Only long-term (EC10/NOEC) data',
                children: [
                    {
                        label: '1 trophic level (either fish or daphnia)',
                        children: [
                            {
                                label: 'Use assessment factor of 100 on lowest value',
                            },
                        ],
                    },
                    {
                        label: '2 trophic levels',
                        children: [
                            {
                                label: 'Use assessment factor of 50 on lowest value',
                            },
                        ],
                    },
                    {
                        label: '3 trophic levels',
                        children: [
                            {
                                label: 'Use assessment factor of 10 on lowest value',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'Combination of short-term and long-term data',
                children: [
                    {
                        label: '1 long-term result plus short-term results',
                        children: [
                            {
                                label: 'Does the long-term result come from the same species as that with the lowest of short-term results?',
                                children: [
                                    {
                                        label: 'If yes, use an assessment factor of 100 on the long-term result',
                                    },
                                    {
                                        label: 'If no, use an assessment factor of 1000 on the lowest short-term result',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: '2 long-term results (from 2 trophic levels) plus short-term results',
                        children: [
                            {
                                label: 'Does the lowest long-term result come from the same species as that with the lowest short-term result?',
                                children: [
                                    {
                                        label: 'If yes, use an assessment factor of 50 on the lowest long-term result',
                                    },
                                    {
                                        label: 'If no, is the value of the lowest short-term result lower than the lowest long-term result?',
                                        children: [
                                            {
                                                label: 'If no, use an assessment factor of 100 on lowest long-term result',
                                            },
                                            {
                                                label: 'If yes, use an assessment factor of 100 on the lowest short-term result',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        label: '3 long-term results (from 3 trophic levels) plus short-term results',
                        children: [
                            {
                                label: 'Does the lowest long-term result come from the same species as that with the lowest short-term result?',
                                children: [
                                    {
                                        label: 'If yes, use an assessment factor of 10 on the lowest long-term result',
                                    },
                                    {
                                        label: 'If no, is the value of the lowest short-term result lower than the lowest long-term result?',
                                        children: [
                                            {
                                                label: 'If no, use an assessment factor of 50 on the lowest long-term result',
                                            },
                                            {
                                                label: 'If yes, use an assessment factor of 100 on the lowest short-term result',
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    };

    const [currentNode, setCurrentNode] = useState(treeData);
    const handleNodeClick = (node) => {
        if (node.children && node.children.length > 0) {
            setCurrentNode(node);
        } else {
            // If it's a leaf node, navigate to HomePage
            navigation.navigate('HomePage');
        }
    };

    return (
        <View style={styles.container}>
            <TreeView data={currentNode} onNodeClick={handleNodeClick} />
        </View>
    );
};

export default TreeScreen;

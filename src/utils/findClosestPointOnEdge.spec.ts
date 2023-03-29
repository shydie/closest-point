import * as THREE from 'three'
import findClosestPointOnEdge from './findClosestPointOnEdge'

describe('findClosestPointOnEdge', () => {
  const vertices = [
    { x: 0, y: 0 },
    { x: 2, y: 0 },
    { x: 2, y: 2 },
    { x: 0, y: 2 },
  ]

  it('should return null when given an empty polygon', () => {
    const closest = findClosestPointOnEdge([], { x: 1, y: 1 })
    expect(closest).toBeNull()
  })

  it('should return the closest point for a point inside the polygon', () => {
    const point = { x: 1, y: 1 }
    const closest = findClosestPointOnEdge(vertices, point)
    expect(closest).toEqual(new THREE.Vector3(1, 0, 0))
  })

  it('should return the closest point for a point outside the polygon', () => {
    const point = { x: -1, y: -1 }
    const closest = findClosestPointOnEdge(vertices, point)
    expect(closest).toEqual(new THREE.Vector3(0, 0, 0))
  })

  it('should return the closest point for a point on an edge of the polygon', () => {
    const point = { x: 1, y: 0 }
    const closest = findClosestPointOnEdge(vertices, point)
    expect(closest).toEqual(new THREE.Vector3(1, 0, 0))
  })
})
